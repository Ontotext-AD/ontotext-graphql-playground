# graphql-playground-component



<!-- Auto Generated Below -->


## Properties

| Property        | Attribute | Description | Type                                     | Default     |
| --------------- | --------- | ----------- | ---------------------------------------- | ----------- |
| `configuration` | --        |             | `ExternalGraphqlPlaygroundConfiguration` | `undefined` |


## Events

| Event        | Description                                                                                    | Type                       |
| ------------ | ---------------------------------------------------------------------------------------------- | -------------------------- |
| `abortQuery` | An event is emitted when a query is aborted, with the initialized request data as the payload. | `CustomEvent<RequestInit>` |


## Methods

### `setEditorsTheme(editorsThemeName?: string) => Promise<void>`

Sets the CodeMirror theme for all GraphiQL editor instances.

Updates the editor theme in the current GraphiQL configuration and
re-renders GraphiQL to apply the new theme.

#### Parameters

| Name               | Type     | Description                                                                        |
| ------------------ | -------- | ---------------------------------------------------------------------------------- |
| `editorsThemeName` | `string` | - Name of the CodeMirror theme to apply. Defaults to `"graphiql"` if not provided. |

#### Returns

Type: `Promise<void>`

A resolved promise once the theme is applied.

### `setLanguage(newLanguage: string) => Promise<void>`

Updates the language used in the GraphiQL component.

#### Parameters

| Name          | Type     | Description                                                                                    |
| ------------- | -------- | ---------------------------------------------------------------------------------------------- |
| `newLanguage` | `string` | - The new language to be set for the GraphiQL component. If not provided, it defaults to 'en'. |

#### Returns

Type: `Promise<void>`

A promise that resolves when the language is updated.


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
