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
        /**
          * Updates the language used in the GraphiQL component.
          * @param newLanguage - The new language to be set for the GraphiQL component. If not provided, it defaults to 'en'.
          * @returns A promise that resolves when the language is updated.
         */
        "setLanguage": (newLanguage: string) => Promise<void>;
    }
}
export interface GraphqlPlaygroundComponentCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLGraphqlPlaygroundComponentElement;
}
declare global {
    interface HTMLGraphqlPlaygroundComponentElementEventMap {
        "abortQuery": RequestInit;
    }
    interface HTMLGraphqlPlaygroundComponentElement extends Components.GraphqlPlaygroundComponent, HTMLStencilElement {
        addEventListener<K extends keyof HTMLGraphqlPlaygroundComponentElementEventMap>(type: K, listener: (this: HTMLGraphqlPlaygroundComponentElement, ev: GraphqlPlaygroundComponentCustomEvent<HTMLGraphqlPlaygroundComponentElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLGraphqlPlaygroundComponentElementEventMap>(type: K, listener: (this: HTMLGraphqlPlaygroundComponentElement, ev: GraphqlPlaygroundComponentCustomEvent<HTMLGraphqlPlaygroundComponentElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
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
        /**
          * An event is emitted when a query is aborted, with the initialized request data as the payload.
         */
        "onAbortQuery"?: (event: GraphqlPlaygroundComponentCustomEvent<RequestInit>) => void;
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
