import { Config } from '@stencil/core';
import commonjs from "@rollup/plugin-commonjs";
import nodeResolve from "@rollup/plugin-node-resolve";
import {angularOutputTarget} from "@stencil/angular-output-target";
import {sass} from "@stencil/sass";

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
        }
      ],
    },
    angularOutputTarget({
      componentCorePackage: 'graphql-playground-component',
      directivesProxyFile: '../ontotext-graphql-playground-component/src/components.d',
      // valueAccessorConfigs: angularValueAccessorBindings,
    }),
  ],
    plugins: [sass()],
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
};
