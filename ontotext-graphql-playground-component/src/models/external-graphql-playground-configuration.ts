import {Translations} from './translations';

export class ExternalGraphqlPlaygroundConfiguration {
  /**
   * The graphql endpoint which will be used when a query request is made.
   */
  endpoint: string
  /**
   * The headers which will be sent with the query request.
   * - If provided as an object (`Record<string, string>`), these headers are set statically.
   * - If provided as a function (`() => Record<string, string>`), the function will be called to generate the headers dynamically.
   */
  headers: Record<string, string> | (() => Record<string, string>);
  
  /**
   * Determines the language that has to be used. If none is provided, the default ('en') will be used.
   */
  selectedLanguage?: string;
  
  /**
   * Name of the CodeMirror theme applied to all GraphiQL editor instances.
   *
   * If this property is not provided, the default `"graphiql"` theme is used.
   */
  editorsThemeName?: string;
  
  /**
   * Represents a collection of translations for multiple languages,
   * using a flat structure with dot-separated keys or nested objects.
   *
   * If no translations are provided, the internally defined translations for English (`en`)
   * and French (`fr`) will be used. If translations are passed, they will extend or override
   * the predefined ones.
   *
   * @example
   * ```typescript
   * const translations: Translations = {
   *   en: {
   *     "editor.title": "Editor",
   *     "editor": {
   *       "description": "This is the editor"
   *     }
   *   },
   *   fr: {
   *     "editor.title": "Éditeur",
   *     "editor": {
   *       "description": "C'est l'éditeur"
   *     }
   *   }
   * };
   * ```
   */
  translations?: Translations;
  
  /**
   * The default query that will be used when a new tab is added.
   */
  defaultQuery: string;
}
