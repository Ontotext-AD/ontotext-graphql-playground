/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { ExternalGraphqlPlaygroundConfiguration } from "./models/external-graphql-playground-configuration";
export { ExternalGraphqlPlaygroundConfiguration } from "./models/external-graphql-playground-configuration";
export namespace Components {
    interface GraphqlPlaygroundComponent {
        "configuration": ExternalGraphqlPlaygroundConfiguration;
    }
}
declare global {
    interface HTMLGraphqlPlaygroundComponentElement extends Components.GraphqlPlaygroundComponent, HTMLStencilElement {
    }
    var HTMLGraphqlPlaygroundComponentElement: {
        prototype: HTMLGraphqlPlaygroundComponentElement;
        new (): HTMLGraphqlPlaygroundComponentElement;
    };
    interface HTMLElementTagNameMap {
        "graphql-playground-component": HTMLGraphqlPlaygroundComponentElement;
    }
}
declare namespace LocalJSX {
    interface GraphqlPlaygroundComponent {
        "configuration"?: ExternalGraphqlPlaygroundConfiguration;
    }
    interface IntrinsicElements {
        "graphql-playground-component": GraphqlPlaygroundComponent;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "graphql-playground-component": LocalJSX.GraphqlPlaygroundComponent & JSXBase.HTMLAttributes<HTMLGraphqlPlaygroundComponentElement>;
        }
    }
}
