export class ExternalGraphqlPlaygroundConfiguration {
  /**
   * The graphql endpoint which will be used when a query request is made.
   */
  endpoint: string
  /**
   * The headers which will be sent with the query request.
   */
  headers: Record<string, string>;
}
