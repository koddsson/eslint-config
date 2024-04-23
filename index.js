import path from "node:path";
import { fileURLToPath } from "node:url";

import js from "@eslint/js";
import globals from "globals";
import { FlatCompat } from "@eslint/eslintrc";
import eslintPluginUnicorn from "eslint-plugin-unicorn";

import parser from "@typescript-eslint/parser";

// mimic CommonJS variables -- not needed if using CommonJS
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

export default await (async function () {
  const eslintPluginPrettierRecommended = (
    await import("eslint-plugin-prettier/recommended")
  ).default;

  return [
    js.configs.recommended,
    eslintPluginUnicorn.configs["flat/all"],
    ...compat.extends("plugin:@typescript-eslint/recommended"),
    eslintPluginPrettierRecommended,
    {
      languageOptions: {
        ecmaVersion: 2022,
        sourceType: "module",
        globals: {
          ...globals.browser,
        },
        parserOptions: {
          ecmaVersion: "latest",
          sourceType: "module",
          project: ["./tsconfig.json"],
        },
        parser,
      },
    },
  ];
})();
