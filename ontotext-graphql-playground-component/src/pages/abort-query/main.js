function attachAbortQueryHandler() {
    const graphqlPlayground = getPlaygroundComponent();
    graphqlPlayground.addEventListener('abortQuery', (event) => {
        const div = document.getElementById('abort-query-div');
        div.innerHTML = `${JSON.stringify(event.detail)}`;
    });
}
