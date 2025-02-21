import {GraphiQLProps} from '@graphiql';
import {FetcherConfigurationMapper} from './fetcher-configuration.mapper';
import {InternalGraphqlPlaygroundConfiguration} from '../models/internal-graphql-playground-configuration';

/**
 * Mapper class for converting an external GraphQL playground configuration into a configuration compatible with GraphiQL.
 */
export class GraphiqlConfigurationMapper {
  
  /**
   * Converts an external configuration into a GraphiQL configuration, which is used when initializing the GraphiQL component.
   *
   * @param configuration - The configuration that configures the GraphiQL component.
   
   * @returns A GraphiQL configuration object.
   */
  static toGraphiQLConfiguration(configuration: InternalGraphqlPlaygroundConfiguration): GraphiQLProps {
    return {
      defaultEditorToolsVisibility: false,
      selectedLanguage: configuration.selectedLanguage,
      defaultQuery: configuration.defaultQuery,
      translations: configuration.translations,
      fetcher: window.GraphiQL.createFetcher(FetcherConfigurationMapper.toFetcherConfiguration(configuration)),
      plugins: [window.GraphiQLPluginExplorer.explorerPlugin()]
    };
  }
}
