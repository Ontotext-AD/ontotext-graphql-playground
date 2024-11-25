
# Ontotext GraphQL Playground Development Notes

The **Ontotext GraphQL Playground** is a project designed to provide an intuitive interface for exploring and interacting with GraphQL APIs. It builds on a forked repository of [GraphiQL](https://github.com/graphql/graphiql) and enhances it with additional functionality by integrating it into a reusable StencilJS-based web component. This setup ensures flexibility, reusability, and compatibility with other Ontotext projects, starting with the GraphDB Workbench.

## Project Structure

The project is organized as follows:

- **`graphiql/` (Submodule)**  
  A [forked version](https://github.com/Ontotext-AD/graphiql-fork) of the popular [GraphiQL](https://github.com/graphql/graphiql) library. This submodule contains the core GraphQL playground functionality and acts as the foundation for this project.

- **`ontotext-graphql-playground-component/`**  
  A [StencilJS](https://stenciljs.com/) web component that wraps the `graphiql` library and publishes it to npm for use in other projects. This component provides a framework-agnostic way to embed the GraphQL Playground in various applications.

## Workflow

The project development workflow follows these steps:

### 1. **Setting up the Repository**
- Clone the repository, including the submodule:
  ```bash
  git clone --recurse-submodules https://github.com/Ontotext-AD/ontotext-graphql-playground
  ```
  > **Note**: You need an SSH public key registered with your Git account and sufficient permissions to access the submodule repository.

- If the submodule is not initialized, run:
  ```bash
  git submodule update --init --recursive
  ```

### 2. **Working with the `graphiql` Submodule**
- The `graphiql` submodule resides in its own folder and can be updated or customized as needed.
- Make changes in the [forked repository](https://github.com/Ontotext-AD/graphiql-fork) to introduce Ontotext-specific features.
- Ensure compatibility with the StencilJS component by maintaining API stability.

### 3. **Developing the StencilJS Component**
Check out stenciljs docs [here](https://stenciljs.com/docs/my-first-component).
- Navigate to the `ontotext-graphql-playground-component/` directory.
- Install dependencies:
  ```bash
  npm install
  ```
- Start the development server:
  ```bash
  npm run start
  ```
- Update the StencilJS component to wrap `graphiql` features with Ontotext-specific styling and behavior.

### 4. **Building and Publishing**

To build and publish the StencilJS component, follow these steps:

1. **Prepare Dependencies**
    - First, navigate to the `graphiql` directory to install and build the project. [See](./graphiql/DEVELOPMENT.md) 
    - Obtain the following build artifacts from the `graphiql` build:
        - `graphiql.min.css`
        - `graphiql.min.js`
    - Copy these files into the `ontotext-graphql-playground-component/src/components/assets` directory.

2. **Additional Assets**
    - Additionally, you need to obtain and copy the following files into the same directory (`ontotext-graphql-playground-component/src/components/assets`):
        - `explorer.index.umd.js`
        - `explorer.style.css`
        - `react.development.js`
        - `react-dom.development.js`

3. **Assets Output**
    - During the build process, these files are copied to:
      ```
      dist/ontotext-graphql-playground-component/assets
      ```

4. **Build the Component**
    - Navigate to the `ontotext-graphql-playground-component` directory and build the component for production:
      ```bash
      npm run build
      ```

5. **Publish to npm**
    - Publish the built component to npm:
      ```bash
      npm publish
      ```

6. **Integration**
    - Once published, use the component in other projects, such as the GraphDB Workbench.

### 5. **Testing**
    // TODO describe with cypress install


### 6. **Integrating the Component into Another Project**

To integrate the **Ontotext GraphQL Playground Component** into another project, follow these steps:

#### 1. **Install the Component via npm**

Run the following command in your project directory to install the component:

```bash
npm install ontotext-graphql-playground-component
```

#### 2. **Ensure Asset Files Are Accessible**

The component will attempt to load the required files from the `assets` folder. You must ensure these files are copied to the correct location in your project during the build process.

##### Example: Using Webpack with `CopyPlugin`

Add the following configuration to your Webpack setup to copy the required assets:

```javascript
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  // ... other Webpack config
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: 'node_modules/ontotext-graphql-playground-component/dist/ontotext-graphql-playground-component/assets',
          to: 'assets',
        },
      ],
    }),
  ],
};
```

#### 3. **Usage Example with Angular (Angular 18)**
// TODO add description


## Best Practices

1. **Submodule Management**
    - Always update the [`graphiql` submodule](https://github.com/Ontotext-AD/graphiql-fork) in sync with the upstream fork.
    - Test thoroughly after any updates to ensure no breaking changes affect the StencilJS component.

2. **Code Consistency**
    - Development in the graphiql must comply with the practices and standarts in that project. This is needed to prevent spreading unwanted changes in the codebase hance preventing conflicts during upgrade.
    - Use linting tools for consistent code formatting:
      ```bash
      npm run lint
      ```

3. **Component Reusability**
    - Design the StencilJS component to be modular and easy to configure.
    - Provide detailed documentation and examples in the component's `README.md`.

4. **Documentation**
    - Keep this README up to date with the latest project structure and workflow.
    - Include detailed comments in the code to explain Ontotext-specific changes.

5. **CI/CD**
   // TODO describe CI/CD

6. **Version Control**
   // TODO describe and add GitHub template

---
