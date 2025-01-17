function getPlaygroundComponent() {
  return document.querySelector('graphql-playground-component');
}

const getConfiguration = () => ({
  // For testing purposes can be used these public free graphql APIs:
  // endpoint: 'https://rickandmortyapi.com/graphql'
  // endpoint: 'https://countries.trevorblades.com'
  endpoint: '/rest/repositories/test/graphql/countries'
});

document.addEventListener('DOMContentLoaded', () => {
  const graphqlPlayground = getPlaygroundComponent();
  if (graphqlPlayground) {
    graphqlPlayground.configuration = getConfiguration();
  }
});

