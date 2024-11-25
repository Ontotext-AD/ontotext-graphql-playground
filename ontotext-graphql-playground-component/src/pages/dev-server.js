/**
 * Custom middleware for the StencilJS dev server.
 * This middleware allows to extend the dev server functionality
 * by handling specific routes, logging, or mocking APIs.
 *
 * @example
 * // Log all incoming requests
 * console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
 *
 * // Mock API response for a specific route
 * if (req.url === '/some-route') {
 *   res.writeHead(200, { 'Content-Type': 'application/json' });
 *   res.end(JSON.stringify({message: 'Mock data from custom server!'}));
 *   return; // Prevents calling `next` after sending a response
 * }
 *
 * // Pass all other requests to the next middleware or static server
 * next();
 *
 * @param {import('http').IncomingMessage} req - The HTTP request object.
 * @param {import('http').ServerResponse} res - The HTTP response object.
 * @param {Function} next - Callback to pass control to the next middleware or static server.
 */
module.exports = (req, res, next) => {
  next();
};
