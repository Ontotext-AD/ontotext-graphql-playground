import { Config } from '@stencil/core';
import { angularOutputTarget } from '@stencil/angular-output-target';
import nodeResolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import {sass} from "@stencil/sass";

const path = `${__dirname}/src/pages/dev-server.js`;

export const config: Config = {
  namespace: 'ontotext-graphql-playground-component',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
      copy: [
        {
          src: 'components/assets',
          dest: 'dist/ontotext-graphql-playground-component/assets',
        }
      ]
    },
    {
      type: 'dist-custom-elements',
      customElementsExportBehavior: 'auto-define-custom-elements',
      externalRuntime: false,
      copy: [
        {
          src: 'components/assets',
          dest: 'dist/ontotext-graphql-playground-component/assets',
        }
      ]
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null,
      copy: [
        {
          src: 'components/assets',
          dest: 'build/assets',
        },
        {src: 'pages'},
      ]
    },
    angularOutputTarget({
      componentCorePackage: 'ontotext-graphql-playground-component',
      outputType: 'component',
      directivesProxyFile: './generated/components.ts',
      directivesArrayFile: './generated/index.ts',
    }),
  ],
  testing: {
    browserHeadless: "new",
  },
  rollupPlugins: {
    before: [
      // This will run before Stencil's internal Rollup plugins
      nodeResolve(),
      commonjs(),
    ],
  },
  plugins: [sass()],
  devServer: {
    requestListenerPath: path
  }
};
