import {ExternalGraphqlPlaygroundConfiguration} from '../models/external-graphql-playground-configuration';
import {CreateFetcherOptions} from '@fetcher';

/**
 * Utility class for converting an external GraphQL playground configuration into a fetcher configuration compatible with GraphiQL.
 */
export class FetcherConfigurationMapper {
  
  /**
   * Converts an external GraphQL playground configuration into a fetcher configuration.
   *
   * @param configuration - The external configuration containing the GraphQL endpoint and optional headers.
   * @returns A fetcher configuration object containing the endpoint URL and headers.
   */
  static toFetcherConfiguration(configuration: ExternalGraphqlPlaygroundConfiguration): CreateFetcherOptions {
    const fetcherConfig = {
      url: configuration.endpoint,
    }
    // If headers are provided, add them to the fetcher configuration. We currently just pass them as they are without
    // any validation.
    if (configuration.headers) {
      fetcherConfig['headers'] = configuration.headers;
    }
    return fetcherConfig;
  }
}
