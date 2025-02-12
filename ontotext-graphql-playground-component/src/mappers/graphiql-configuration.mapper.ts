import {ExternalGraphqlPlaygroundConfiguration} from '../models/external-graphql-playground-configuration';
import {GraphiQLProps} from '@graphiql';
import {FetcherConfigurationMapper} from './fetcher-configuration.mapper';

/**
 * Mapper class for converting an external GraphQL playground configuration into a configuration compatible with GraphiQL.
 */
export class GraphiqlConfigurationMapper {
  
  /**
   * Converts an external configuration into a GraphiQL configuration, which is used when initializing the GraphiQL component.
   *
   * @param configuration - The external configuration that configures the GraphiQL component.
   
   * @returns A GraphiQL configuration object.
   */
  static toGraphiQLConfiguration(configuration: ExternalGraphqlPlaygroundConfiguration): GraphiQLProps {
    return {
      defaultEditorToolsVisibility: false,
      selectedLanguage: configuration.selectedLanguage || 'en',
      defaultQuery: ' ',
      translations: configuration.translations,
      fetcher: window.GraphiQL.createFetcher(FetcherConfigurationMapper.toFetcherConfiguration(configuration)),
      plugins: [window.GraphiQLPluginExplorer.explorerPlugin()]
    };
  }
}
