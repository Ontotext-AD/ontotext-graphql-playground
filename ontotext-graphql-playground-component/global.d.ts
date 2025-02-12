import {CreateFetcherOptions, Fetcher} from '@fetcher';
import {GraphiQLProps} from '@graphiql';

declare global {
  interface Window {
    React: React,
    ReactDOM: ReactDOM,
    GraphiQL: GraphiQL,
    GraphiQLPluginExplorer: GraphiQLPluginExplorer
  }
}

interface ReactDOM {
  createRoot(element: Element | null): any
}

interface GraphiQL {
  createFetcher(fetcherOptions: CreateFetcherOptions): Fetcher
}

interface React {
  createElement(type: any, props: GraphiQLProps): any
}

interface GraphiQLPluginExplorer {
  explorerPlugin(): any
}
export {}
