import {Component, Host, h, getAssetPath} from '@stencil/core';

@Component({
  tag: 'graphql-playground-component',
  styleUrl: 'graphql-playground-component.css',
  assetsDirs: ['assets'],
  shadow: false,
})
export class GraphqlPlaygroundComponent {

  static loadJavaScript(url: string, async = false) {
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
        console.log('LOADED')
        document.head.appendChild(loader);
      } else {
        console.log('RESOLVED')
        resolve();
      }
    });
  }

  static loadCss(url: string) {
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

  // async componentWillLoad() {
  //   console.log('componentWillLoad');
  //   console.log(getAssetPath('./assets/graphiql.min.css'))
  //   // try {
  //   //   const [React, ReactDOM] = await Promise.all([
  //   //     import('react'),
  //   //     import('react-dom'),
  //   //   ]);
  //   //   console.log('React loaded', { React });
  //   //   console.log('React loaded', { ReactDOM });
  //   // } catch (error) {
  //   //   console.error('Error loading modules:', error);
  //   // }
  //   await GraphqlPlaygroundComponent.loadJavaScript(getAssetPath('./assets/react.development.js'));
  //   await GraphqlPlaygroundComponent.loadJavaScript(getAssetPath('./assets/react-dom.development.js'));
  //   await GraphqlPlaygroundComponent.loadJavaScript(getAssetPath('./assets/graphiql.min.js'));
  //   await GraphqlPlaygroundComponent.loadJavaScript(getAssetPath('./assets/explorer.index.umd.js'));
  //   await GraphqlPlaygroundComponent.loadJavaScript(getAssetPath('./assets/react.development.js'));
  //   await GraphqlPlaygroundComponent.loadCss(getAssetPath('./assets/graphiql.min.css'));
  //   return await GraphqlPlaygroundComponent.loadCss(getAssetPath('./assets/explorer.style.css'));
  //     // return GraphqlPlaygroundComponent.loadJavaScript(getAssetPath('./assets/graphiql.min.js'))
  //     //   .then(() => GraphqlPlaygroundComponent.loadCss(getAssetPath('./assets/graphiql.min.css')));
  // }



  async componentWillLoad() {
    console.log(getAssetPath('./assets/graphiql.min.css'))

    const basePath = './assets/';
    try {
      await GraphqlPlaygroundComponent.loadJavaScript(`${basePath}react.development.js`);
      await GraphqlPlaygroundComponent.loadJavaScript(`${basePath}react-dom.development.js`);
      await GraphqlPlaygroundComponent.loadJavaScript(`${basePath}graphiql.min.js`);
      await GraphqlPlaygroundComponent.loadJavaScript(`${basePath}explorer.index.umd.js`);

      await GraphqlPlaygroundComponent.loadCss(`${basePath}graphiql.min.css`);
      await GraphqlPlaygroundComponent.loadCss(`${basePath}explorer.style.css`);
    } catch (error) {
      console.error('Error loading assets:', error);
    }
  }


  componentDidLoad() {
    console.log('componentDidLoad');
    setTimeout(() => {
      const containerEl = document.querySelector('graphql-playground-component #graphiql');
      console.log('container', containerEl);
      // @ts-ignore
      const root = ReactDOM.createRoot(containerEl);
      // @ts-ignore
      const fetcher = GraphiQL.createFetcher({
        // url: 'https://swapi-graphql.netlify.app/.netlify/functions/index',
        url: 'http://localhost:9995/graphql'
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

  render() {
    console.log('render')
    // const init = () => {
    //   // setTimeout(() => {
    //     const containerEl = document.querySelector('graphql-playground-component #graphiql');
    //     console.log('container', containerEl);
    //     // @ts-ignore
    //     const root = ReactDOM.createRoot(containerEl);
    //     // @ts-ignore
    //     const fetcher = GraphiQL.createFetcher({
    //       // url: 'https://swapi-graphql.netlify.app/.netlify/functions/index',
    //       url: 'http://localhost:9995/graphql'
    //     });
    //     // @ts-ignore
    //     const explorerPlugin = GraphiQLPluginExplorer.explorerPlugin();
    //     root.render(
    //         // @ts-ignore
    //         React.createElement(GraphiQL, {
    //             fetcher,
    //             defaultEditorToolsVisibility: true,
    //             plugins: [explorerPlugin],
    //         }),
    //     );
    //   // }, 1000);
    // }

    return (<Host>
      <div id="graphiql">Loading...</div>
    </Host>);
  }
}
