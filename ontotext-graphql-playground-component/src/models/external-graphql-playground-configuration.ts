import {Translations} from './translations';

export class ExternalGraphqlPlaygroundConfiguration {
  /**
   * The graphql endpoint which will be used when a query request is made.
   */
  endpoint: string
  /**
   * The headers which will be sent with the query request.
   */
  headers: Record<string, string>;
  
  /**
   * Determines the language that has to be used. If none is provided, the default ('en') will be used.
   */
  selectedLanguage?: string;
  
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
}
