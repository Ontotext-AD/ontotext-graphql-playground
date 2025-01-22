import {Component, Host, h, getAssetPath, JSX, Prop, Watch} from '@stencil/core';
import {ExternalGraphqlPlaygroundConfiguration} from "../../models/external-graphql-playground-configuration";

@Component({
  tag: 'graphql-playground-component',
  styleUrl: 'graphql-playground-component.css',
  assetsDirs: ['assets'],
  shadow: false,
})
export class GraphqlPlaygroundComponent {
  // React root instance must be created only once and reused
  private reactRoot: any;

  @Prop() configuration: ExternalGraphqlPlaygroundConfiguration;

  @Watch('configuration')
  configurationChanged(configuration: ExternalGraphqlPlaygroundConfiguration) {
    this.init(configuration);
  }

  static loadJavaScript(url: string, async = false): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      if (!document.querySelector(`script[src="${url}"]`)) {
        const loader = document.createElement('script');
        loader.setAttribute('src', url);
        loader.async = async;
        loader.addEventListener('load', () => resolve());
        loader.addEventListener('error', () => {
          console.error(`Failed to load script: ${url}`);
          reject(new Error(`Failed to load script: ${url}`));
        });
        document.head.appendChild(loader);
      } else {
        resolve();
      }
    });
  }

  static loadCss(url: string): Promise<void> {
    return new Promise<void>((resolve) => {
      if (!document.querySelector(`link[href="${url}"]`)) {
        const loader = document.createElement('link');
        loader.setAttribute('href', url);
        loader.rel = 'stylesheet';
        loader.type = 'text/css';
        document.head.appendChild(loader);
      }
      resolve();
    });
  }

  async componentWillLoad(): Promise<void> {
    const basePath = './assets/';
    try {
      await GraphqlPlaygroundComponent.loadJavaScript(getAssetPath(`${basePath}react.development.js`));
      await GraphqlPlaygroundComponent.loadJavaScript(getAssetPath(`${basePath}react-dom.development.js`));
      await GraphqlPlaygroundComponent.loadJavaScript(getAssetPath(`${basePath}graphiql.min.js`));
      await GraphqlPlaygroundComponent.loadJavaScript(getAssetPath(`${basePath}explorer.index.umd.js`));

      await GraphqlPlaygroundComponent.loadCss(getAssetPath(`${basePath}graphiql.min.css`));
      await GraphqlPlaygroundComponent.loadCss(getAssetPath(`${basePath}explorer.style.css`));
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

  private init(configuration: ExternalGraphqlPlaygroundConfiguration) {
    const containerEl = document.querySelector('graphql-playground-component #graphiql');
    if (!containerEl) {
      console.error('Container element not found');
      return;
    }
    if (!this.reactRoot) {
      // Create the root only once
      // @ts-ignore
      this.reactRoot = ReactDOM.createRoot(containerEl);
    }

    const fetcher = this.getFetcher(configuration);
    // @ts-ignore
    const explorerPlugin = GraphiQLPluginExplorer.explorerPlugin();
    this.reactRoot.render(
      // @ts-ignore
      React.createElement(GraphiQL, {
        fetcher,
        defaultEditorToolsVisibility: false,
        plugins: [explorerPlugin],
      }),
    );
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

  private getFetcher(configuration: ExternalGraphqlPlaygroundConfiguration) {
    const fetcherConfig = {
      url: configuration.endpoint,
    }
    // If headers are provided, add them to the fetcher configuration. We currently just pass them as they are without
    // any validation.
    if (configuration.headers) {
      fetcherConfig['headers'] = configuration.headers;
    }
    // @ts-ignore
    return GraphiQL.createFetcher(fetcherConfig);
  }
}
