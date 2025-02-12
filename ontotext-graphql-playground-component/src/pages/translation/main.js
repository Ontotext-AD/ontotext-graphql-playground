const useFrenchLanguageInConfiguration = () => {
    const graphqlPlayground = getPlaygroundComponent();
    if (graphqlPlayground) {
        graphqlPlayground.configuration = {
            ...graphqlPlayground.configuration,
            selectedLanguage: "fr"
        };
    }
}

const addMoreLanguages = () => {
    const graphqlPlayground = getPlaygroundComponent();
    if (graphqlPlayground) {
        graphqlPlayground.configuration = {
            ...graphqlPlayground.configuration,
            translations: {
                bg: {
                    "graphiql.editor.tools.btn.headers.label": "Заглавки"
                }
            }
        };
    }
}

const setOverrideTranslation = () => {
    const graphqlPlayground = getPlaygroundComponent();
    if (graphqlPlayground) {
        graphqlPlayground.configuration = {
            ...graphqlPlayground.configuration,
            translations: {
                en: {
                    "graphiql.editor.tools.btn.headers.label": "Headers Changed from External Configuration"
                }
            }
        };
    }
}

const setEnglishLanguage = () => {
    const graphqlPlayground = getPlaygroundComponent();
    if (graphqlPlayground) {
        graphqlPlayground.setLanguage("en");
    }
}

const setFrenchLanguage = () => {
    const graphqlPlayground = getPlaygroundComponent();
    if (graphqlPlayground) {
        graphqlPlayground.setLanguage("fr");
    }
}

const setBulgarianLanguage = () => {
    const graphqlPlayground = getPlaygroundComponent();
    if (graphqlPlayground) {
        graphqlPlayground.setLanguage("bg");
    }
}
