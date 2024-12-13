const defaultHeaders = {
  'api-timestamp': '123456789'
};

/**
 * Utility to match a GraphQL mutation or query based on the operation name.
 *
 * @param {any} req - The request object.
 * @param {string} operationName - The name of the GraphQL operation to match.
 * @returns {boolean} True if the request's operation name matches the provided name, otherwise false.
 */
export const hasOperationName = (req: any, operationName: string): boolean => {
  const {body} = req;
  return (
    body.hasOwnProperty('operationName') && body.operationName === operationName
  );
};

/**
 * Utility to check if a GraphQL request contains the specified variables.
 *
 * @param {any} req - The request object.
 * @param {object} variables - The variables to match in the request.
 * @returns {boolean} True if the request contains the specified variables, otherwise false.
 */
export const hasVariables = (req: any, variables: any): boolean => {
  const {body} = req;
  if (body.hasOwnProperty('variables')) {
    let sameVars = false;
    Object.keys(variables).forEach((name) => {
      if (Array.isArray(variables[name])) {
        sameVars = body.variables[name] !== undefined && variables[name].toString() === body.variables[name].toString();
      } else {
        sameVars = body.variables[name] !== undefined && body.variables[name] === variables[name];
      }
    });
    return sameVars;
  }
  return false;
};

/**
 * Aliases a query request if its operation name matches the provided name.
 *
 * @param {any} req - The request object.
 * @param {string} operationName - The name of the GraphQL query to alias.
 */
export const aliasQuery = (req: any, operationName: string): void => {
  if (hasOperationName(req, operationName)) {
    req.alias = operationName;
  }
};

/**
 * Stubs a GraphQL query request with a specified fixture, status code, and optional headers and delay.
 *
 * @param {any} req - The request object.
 * @param {string} operationName - The name of the GraphQL query to stub.
 * @param {any} fixture - The fixture to return as a response.
 * @param {number} [statusCode=200] - The HTTP status code for the response.
 * @param {number} [delay=0] - The delay in milliseconds before sending the response.
 * @param {object} [headers={}] - Optional headers to include in the response.
 */
export const stubQuery = (req: any, operationName: string, fixture: any, statusCode = 200, delay = 0, headers: { [key: string]: string } = {}): void => {
  if (hasOperationName(req, operationName)) {
    const requestHeaders = {...defaultHeaders, ...headers};
    req.alias = operationName;
    req.reply({
      statusCode,
      body:fixture,
      headers: requestHeaders,
      delay
    });
  }
};

/**
 * Stubs a GraphQL query request with specific variables, using a fixture, delay, and optional headers.
 *
 * @param {any} req - The request object.
 * @param {string} operationName - The name of the GraphQL query to stub.
 * @param {object} variables - The variables to match in the request.
 * @param {any} fixture - The fixture to return as a response.
 * @param {number} [delay=0] - The delay in milliseconds before sending the response.
 * @param {object} [headers={}] - Optional headers to include in the response.
 */
export const stubQueryWithVariable = (req: any, operationName: string, variables: any, fixture: any, delay = 0, headers: { [key: string]: string } = {}): void => {
  if (hasOperationName(req, operationName) && hasVariables(req, variables)) {
    const requestHeaders = {...defaultHeaders, ...headers};
    req.alias = operationName;
    const replyConfig = {
      statusCode: 200, // default
      fixture,
      headers: requestHeaders,
      delay
    };
    req.reply(replyConfig);
  }
};

/**
 * Aliases a mutation request if its operation name matches the provided name.
 *
 * @param {any} req - The request object.
 * @param {string} operationName - The name of the GraphQL mutation to alias.
 */
export const aliasMutation = (req: any, operationName: string): void => {
  if (hasOperationName(req, operationName)) {
    req.alias = operationName;
  }
};

