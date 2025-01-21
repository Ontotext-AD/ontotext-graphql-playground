function changeEndpoint() {
  const graphqlPlayground = getPlaygroundComponent();
  if (graphqlPlayground) {
    graphqlPlayground.configuration = {
      ...getConfiguration(),
      endpoint: "/rest/repositories/test/graphql/rickmorty"
    };
  }
}

function addHeaders() {
  const graphqlPlayground = getPlaygroundComponent();
  if (graphqlPlayground) {
    graphqlPlayground.configuration = {
      ...getConfiguration(),
      headers: {
        'Authorization': 'Bearer 1234567890'
      }
    };
  }
}

function removeHeaders() {
  const graphqlPlayground = getPlaygroundComponent();
  if (graphqlPlayground) {
    graphqlPlayground.configuration = {
      ...getConfiguration()
    };
  }
}
