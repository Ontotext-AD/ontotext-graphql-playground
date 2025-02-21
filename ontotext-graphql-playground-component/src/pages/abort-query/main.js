function attachAbortQueryHandler() {
    const graphqlPlayground = getPlaygroundComponent();
    graphqlPlayground.addEventListener('abortQuery', (event) => {
        const div = document.createElement('div');
        div.innerHTML = `<div id="abort-query-div">${JSON.stringify(event.detail)}</div>`;
        document.body.appendChild(div);
    });
}
