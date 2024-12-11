const globals = require("globals");
const typescriptRecommended = require("@typescript-eslint/eslint-plugin");

module.exports = [
  {
    files: ["**/*.ts"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parser: require("@typescript-eslint/parser"),
      globals: {
        ...globals.browser,
        ...globals.es2021,
      },
    },
    plugins: {
      "@typescript-eslint": typescriptRecommended,
    },
    rules: {
      ...typescriptRecommended.configs.recommended.rules,
      "@typescript-eslint/no-unused-vars": [
        "error",
        { varsIgnorePattern: "(^_*)", argsIgnorePattern: "^_" },
      ],
      "@typescript-eslint/ban-ts-comment": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/explicit-function-return-type": "error",
      "no-console": ["error", { allow: ["warn", "error"] }],
    },
    ignores: [
      "**/*.css",
      "**/*.html",
      "**/*.md",
      "**/*.eot",
      "**/*.svg",
    ],
  },
];
