import {CreateFetcherOptions} from '@fetcher';
import {InternalGraphqlPlaygroundConfiguration} from '../models/internal-graphql-playground-configuration';

/**
 * Utility class for converting an external GraphQL playground configuration into a fetcher configuration compatible with GraphiQL.
 */
export class FetcherConfigurationMapper {
  
  /**
   * Converts an external GraphQL playground configuration into a fetcher configuration.
   *
   * @param configuration - The configuration containing the GraphQL endpoint and optional headers.
   * @returns A fetcher configuration object containing the endpoint URL and headers.
   */
  static toFetcherConfiguration(configuration: InternalGraphqlPlaygroundConfiguration): CreateFetcherOptions {
    return {
      url: configuration.endpoint,
      headers: configuration.headers,
      onAbortQuery: configuration.onAbortQuery
    }
  }
}
