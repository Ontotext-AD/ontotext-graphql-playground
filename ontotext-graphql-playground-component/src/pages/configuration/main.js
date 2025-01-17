function changeEndpoint() {
  const graphqlPlayground = getPlaygroundComponent();
  if (graphqlPlayground) {
    graphqlPlayground.configuration = {
      ...getConfiguration(),
      endpoint: "/rest/repositories/test/graphql/rickmorty"
    };
  }
}
