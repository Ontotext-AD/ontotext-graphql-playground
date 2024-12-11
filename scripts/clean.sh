#!/bin/bash

# This script should be run from the root directory of the project.

# Source the error handling script
. ./error-handling.sh

clean_path() {
    local path=$1
    local description
    description=$(echo "$path" | sed 's/\// -- /g')

    echo "########################   DELETE -- Cleaning ${description} --   ###########################"

    if [ -d "$path" ]; then
        # Path is a directory
        rm -rf "$path"
        handle_error "Cleaning directory: ${description}"
    elif [ -f "$path" ]; then
        # Path is a file
        rm -f "$path"
        handle_error "Deleting file: ${description}"
    else
        # Path might be a pattern; adjust to use find with relative matching
        local dir
        dir=$(dirname "$path")
        local base
        base=$(basename "$path")
        find "$dir" -type f -name "$base" -exec rm -f {} \; 2>/dev/null
        handle_error "Deleting files matching pattern: ${path}"
    fi
}



# Clean
clean_path '../node_modules'

clean_path '../graphiql/coverage'
clean_path '../graphiql/node_modules'

clean_path '../graphiql/packages/cm6-graphql/dist'
clean_path '../graphiql/packages/cm6-graphql/node_modules'

clean_path '../graphiql/packages/codemirror-graphql/cm6-legacy'
clean_path '../graphiql/packages/codemirror-graphql/esm'
clean_path '../graphiql/packages/codemirror-graphql/node_modules'
clean_path '../graphiql/packages/codemirror-graphql/results'
clean_path '../graphiql/packages/codemirror-graphql/utils'
clean_path '../graphiql/packages/codemirror-graphql/variables'
clean_path '../graphiql/packages/codemirror-graphql/*.esm.js'

clean_path '../graphiql/packages/graphiql/esm'
clean_path '../graphiql/packages/graphiql/node_modules'
clean_path '../graphiql/packages/graphiql/*.map'
clean_path '../graphiql/packages/graphiql/tsconfig.tsbuildinfo'

clean_path '../graphiql/packages/graphiql-plugin-code-exporter/dist'
clean_path '../graphiql/packages/graphiql-plugin-code-exporter/node_modules'
clean_path '../graphiql/packages/graphiql-plugin-code-exporter/types'

clean_path '../graphiql/packages/graphiql-plugin-explorer/dist'
clean_path '../graphiql/packages/graphiql-plugin-explorer/node_modules'
clean_path '../graphiql/packages/graphiql-plugin-explorer/types'

clean_path '../graphiql/packages/graphiql-react/dist'
clean_path '../graphiql/packages/graphiql-react/node_modules'
clean_path '../graphiql/packages/graphiql-react/types'

clean_path '../graphiql/packages/graphiql-toolkit/dist'
clean_path '../graphiql/packages/graphiql-toolkit/node_modules'

clean_path '../graphiql/packages/graphql-language-service/dist'
clean_path '../graphiql/packages/graphql-language-service/esm'
clean_path '../graphiql/packages/graphql-language-service/node_modules'

clean_path '../graphiql/packages/graphql-language-service-cli/dist'
clean_path '../graphiql/packages/graphql-language-service-cli/esm'
clean_path '../graphiql/packages/graphql-language-service-cli/node_modules'

clean_path '../graphiql/packages/graphql-language-service-server/dist'
clean_path '../graphiql/packages/graphql-language-service-server/esm'
clean_path '../graphiql/packages/graphql-language-service-server/node_modules'

clean_path '../graphiql/packages/monaco-graphql/dist'
clean_path '../graphiql/packages/monaco-graphql/esm'
clean_path '../graphiql/packages/monaco-graphql/node_modules'

clean_path '../graphiql/packages/vscode-graphql/dist'
clean_path '../graphiql/packages/vscode-graphql/node_modules'
clean_path '../graphiql/packages/vscode-graphql/out'

clean_path '../graphiql/packages/vscode-graphql-execution/dist'
clean_path '../graphiql/packages/vscode-graphql-execution/node_modules'
clean_path '../graphiql/packages/vscode-graphql-execution/out'

clean_path '../graphiql/packages/vscode-graphql-syntax/node_modules'

clean_path '../ontotext-graphql-playground-component/.stencil'
clean_path '../ontotext-graphql-playground-component/dist'
clean_path '../ontotext-graphql-playground-component/loader'
clean_path '../ontotext-graphql-playground-component/node_modules'
clean_path '../ontotext-graphql-playground-component/www'




echo '########################   All directories cleaned successfully!   ###########################'
echo ''
