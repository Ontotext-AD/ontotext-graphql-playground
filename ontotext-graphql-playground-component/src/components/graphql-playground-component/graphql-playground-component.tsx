import {Component, Host, h, getAssetPath, JSX} from '@stencil/core';

@Component({
  tag: 'graphql-playground-component',
  styleUrl: 'graphql-playground-component.css',
  assetsDirs: ['assets'],
  shadow: false,
})
export class GraphqlPlaygroundComponent {
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

  static loadCss(url: string): Promise<void>  {
    return new Promise<void>((resolve) => {
      if (!document.querySelector(`link[href="${url}"]`)) {
        const loader = document.createElement('link');
        loader.setAttribute('href', url);
        loader.rel = 'stylesheet';
        loader.type = 'text/css';
        document.head.appendChild(loader);
      }
      resolve();
    })
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
      const containerEl = document.querySelector('graphql-playground-component #graphiql');
      // @ts-ignore
      const root = ReactDOM.createRoot(containerEl);
      // @ts-ignore
      const fetcher = GraphiQL.createFetcher({
        url: 'https://swapi-graphql.netlify.app/.netlify/functions/index',
        // url: 'http://localhost:9995/graphql'
      });
      // @ts-ignore
      const explorerPlugin = GraphiQLPluginExplorer.explorerPlugin();
      root.render(
        // @ts-ignore
        React.createElement(GraphiQL, {
          fetcher,
          defaultEditorToolsVisibility: true,
          plugins: [explorerPlugin],
        }),
      );
    }, 1000);
  }

  render(): JSX.Element {
    return (<Host>
      <div id="graphiql">Loading...</div>
    </Host>);
  }
}
