function setDraculaTheme() {
    const playgroundComponent = getPlaygroundComponent();
    playgroundComponent.setEditorsTheme('dracula');
}

function setDefaultTheme() {
    const playgroundComponent = getPlaygroundComponent();
    playgroundComponent.setEditorsTheme(undefined);
}

function configureOceanicNextTheme() {
    const playgroundComponent = getPlaygroundComponent();
    playgroundComponent.configuration = {...playgroundComponent.configuration, editorsThemeName: 'oceanic-next'}
}

function configureWithoutTheme() {
    const playgroundComponent = getPlaygroundComponent();
    playgroundComponent.configuration = {...playgroundComponent.configuration, editorsThemeName: undefined}
}
