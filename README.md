
# Ontotext GraphQL Playground Component

The **Ontotext GraphQL Playground Component** is a reusable web component built with [StencilJS](https://stenciljs.com/) that provides an interface for exploring and interacting with GraphQL APIs. Designed for use in Ontotext’s GraphDB Workbench and other applications, it leverages the power of [GraphiQL](https://github.com/graphql/graphiql) while maintaining framework-agnostic reusability.

---

## Features

- **Framework-agnostic**: Works seamlessly with Angular, React, or other modern frameworks.
- **GraphQL Querying**: Provides a GraphQL playground built on GraphiQL.
- **Customization**: Easily extendable for specific project needs.
- **Dynamic Asset Loading**: Automatically loads required scripts and styles for GraphiQL.

---

## Installation

Install the package using npm:

```bash
npm install ontotext-graphql-playground-component
```

---

## Usage

### In HTML

To use the component in a plain HTML application:

1. Add the component to your HTML file:

   ```html
   <graphql-playground-component></graphql-playground-component>
   ```

2. Ensure the required assets are copied into your `assets` folder. See the [Development Notes](./DEVELOPMENT.md) for details.

---

### In Angular
// TODO add description
---

## Running Locally

To run the component locally:

1. Clone the repository:

   ```bash
   git clone https://github.com/Ontotext-AD/ontotext-graphql-playground
   ```

2. Navigate to the `ontotext-graphql-playground-component` directory:

   ```bash
   cd ontotext-graphql-playground/ontotext-graphql-playground-component
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm start
   ```

5. Open your browser at [http://localhost:3333](http://localhost:3333) to view the component.

---

## Development Notes

For detailed development instructions and workflow, refer to the [Development Notes](./DEVELOPMENT.md).

---

## License

This project is licensed under the [MIT License](./LICENSE).
