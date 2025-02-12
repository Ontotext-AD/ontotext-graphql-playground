/**
 * Utility class for dynamically loading external JavaScript and CSS files into a webpage.
 */
export class ResourceUtil {
  
  /**
   * Dynamically loads a JavaScript file into the document if it has not been loaded already.
   *
   * @param {string} url - The URL of the JavaScript file to load.
   * @param {boolean} [async=false] - Whether the script should be loaded asynchronously.
   * @returns {Promise<void>} A promise that resolves when the script is successfully loaded, or rejects if the script fails to load.
   */
  static loadJavaScript(url: string, async = false): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      if (!document.querySelector(`script[src="${url}"]`)) {
        const loader = document.createElement('script');
        loader.setAttribute('src', url);
        loader.async = async;
        loader.addEventListener('load', () => resolve());
        loader.addEventListener('error', () => {
          console.error(`Failed to load script: ${url}`);
          reject(new Error(`Failed to load script: ${url}`));
        });
        document.head.appendChild(loader);
      } else {
        resolve();
      }
    });
  }
  
  /**
   * Dynamically loads a CSS file into the document if it has not been loaded already.
   *
   * @param {string} url - The URL of the CSS file to load.
   * @returns {Promise<void>} A promise that resolves immediately after adding the CSS file.
   */
  static loadCss(url: string): Promise<void> {
    return new Promise<void>((resolve) => {
      if (!document.querySelector(`link[href="${url}"]`)) {
        const loader = document.createElement('link');
        loader.setAttribute('href', url);
        loader.rel = 'stylesheet';
        loader.type = 'text/css';
        document.head.appendChild(loader);
      }
      resolve();
    });
  }
}
