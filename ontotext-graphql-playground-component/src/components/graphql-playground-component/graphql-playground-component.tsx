import {Component, Host, h, getAssetPath, JSX, Prop, Watch, Method, Event, EventEmitter} from '@stencil/core';
import {ExternalGraphqlPlaygroundConfiguration} from "../../models/external-graphql-playground-configuration";
import {GraphiQLProps} from '@graphiql';
import {ResourceUtil} from '../../utils/resource-util';
import {GraphiqlConfigurationMapper} from '../../mappers/graphiql-configuration.mapper';
import {InternalGraphqlPlaygroundConfiguration} from '../../models/internal-graphql-playground-configuration';

@Component({
  tag: 'graphql-playground-component',
  styleUrl: 'graphql-playground-component.css',
  assetsDirs: ['assets'],
  shadow: false,
})
export class GraphqlPlaygroundComponent {
  // React root instance must be created only once and reused
  private reactRoot: any;
  
  /**
   * React determines whether a component should re-render by checking references for equality.
   * This property holds a reference to the entire configuration when GraphiQL is first created.
   *
   * If we want to update only a specific part of the component, we can modify only the values
   * that will trigger re-renders for the affected components. For reference, see how changing
   * the language works.
   */
  private graphiQlConfiguration: GraphiQLProps;
  
  @Prop() configuration: ExternalGraphqlPlaygroundConfiguration;
  
  @Watch('configuration')
  configurationChanged(configuration: ExternalGraphqlPlaygroundConfiguration) {
    this.init(configuration);
  }
  
  /**
   * An event is emitted when a query is aborted, with the initialized request data as the payload.
   */
  @Event() abortQuery: EventEmitter<RequestInit>;
  
  /**
   * Updates the language used in the GraphiQL component.
   *
   * @param newLanguage - The new language to be set for the GraphiQL component. If not provided, it defaults to 'en'.
   *
   * @returns {Promise<void>} A promise that resolves when the language is updated.
   */
  @Method()
  setLanguage(newLanguage: string) {
    if (this.graphiQlConfiguration) {
      this.graphiQlConfiguration.selectedLanguage = newLanguage || 'en';
      this.renderGraphiQL();
    }
    return Promise.resolve();
  }
  
  async componentWillLoad(): Promise<void> {
    const basePath = './assets/';
    try {
      await ResourceUtil.loadJavaScript(getAssetPath(`${basePath}react.development.js`));
      await ResourceUtil.loadJavaScript(getAssetPath(`${basePath}react-dom.development.js`));
      await ResourceUtil.loadJavaScript(getAssetPath(`${basePath}graphiql.min.js`));
      await ResourceUtil.loadJavaScript(getAssetPath(`${basePath}explorer.index.umd.js`));
      
      await ResourceUtil.loadCss(getAssetPath(`${basePath}graphiql.min.css`));
      await ResourceUtil.loadCss(getAssetPath(`${basePath}explorer.style.css`));
    } catch (error) {
      console.error('Error loading assets:', error);
    }
  }
  
  componentDidLoad(): void {
    setTimeout(() => {
      if (this.configuration) {
        this.init(this.configuration);
      } else {
        console.error('Configuration is undefined');
      }
    }, 500);
  }
  
  disconnectedCallback() {
    if (this.reactRoot) {
      this.reactRoot.unmount();
      this.reactRoot = null;
    }
  }
  
  render(): JSX.Element {
    return (
      <Host>
        <div id="graphiql">Loading...</div>
      </Host>
    );
  }
  
  private init(externalConfiguration: ExternalGraphqlPlaygroundConfiguration) {
    const configuration = new InternalGraphqlPlaygroundConfiguration(externalConfiguration);
    configuration.onAbortQuery = (request: RequestInit) => this.abortQuery.emit(request);
    
    const containerEl = document.querySelector('graphql-playground-component #graphiql');
    if (!containerEl) {
      console.error('Container element not found');
      return;
    }
    if (!this.reactRoot) {
      // Create the root only once
      this.reactRoot = window.ReactDOM.createRoot(containerEl);
    }
    
    this.graphiQlConfiguration = GraphiqlConfigurationMapper.toGraphiQLConfiguration(configuration);
    this.renderGraphiQL();
  }
  
  private renderGraphiQL(): void {
    this.reactRoot.render(
      window.React.createElement(window.GraphiQL, this.graphiQlConfiguration),
    );
  }
}
