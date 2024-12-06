#!/bin/bash

# Define source files and destination directory
SOURCE_FILES=(
  "../node_modules/react/umd/react.development.js"
  "../node_modules/react-dom/umd/react-dom.development.js"
  "../../graphiql/packages/graphiql/graphiql.min.js"
  "../../graphiql/packages/graphiql/graphiql.min.css"
  "../../graphiql/packages/graphiql-plugin-explorer/dist/index.umd.js"
  "../../graphiql/packages/graphiql-plugin-explorer/dist/style.css"
)
DEST_DIR="../src/components/assets"

# Define a rename map for specific files
declare -A RENAME_MAP=(
  ["../../graphiql/packages/graphiql-plugin-explorer/dist/index.umd.js"]="explorer.index.umd.js"
  ["../../graphiql/packages/graphiql-plugin-explorer/dist/style.css"]="explorer.style.css"
)

echo "Cleaning up destination directory: $DEST_DIR"
rm -rf "$DEST_DIR"/*

# Ensure destination directory exists
mkdir -p "$DEST_DIR"

# Copy each file
for SOURCE_FILE in "${SOURCE_FILES[@]}"; do
  # Determine the filename (default to basename)
  if [[ -n "${RENAME_MAP[$SOURCE_FILE]}" ]]; then
    FILE_NAME="${RENAME_MAP[$SOURCE_FILE]}"
  else
    FILE_NAME=$(basename "$SOURCE_FILE")
  fi

  # Check if the source file exists
  if [ -f "$SOURCE_FILE" ]; then
    cp "$SOURCE_FILE" "$DEST_DIR/$FILE_NAME"
    echo "Copied $FILE_NAME to $DEST_DIR"
  else
    echo "Error: $SOURCE_FILE not found. Did you run 'npm install'?"
    exit 1
  fi
done

echo "All files copied successfully!"
