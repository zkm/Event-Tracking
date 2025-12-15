const js = require("@eslint/js");
const globals = require("globals");
const eslintConfigPrettier = require("eslint-config-prettier");

module.exports = [
  {
    ignores: [
      "node_modules/**",
      "dist/**",
      "build/**",
      ".pnp.cjs",
      ".pnp.loader.mjs",
      ".yarn/**",
      "eslint.config.js",
    ],
  },
  js.configs.recommended,
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "script",
      globals: {
        ...globals.browser,
        ga: "readonly",
      },
    },
    rules: {
      "no-console": "off",
    },
  },
  eslintConfigPrettier,
];
