import js from "@eslint/js";
import globals from "globals";
import json from "@eslint/json";
import { defineConfig } from "eslint/config";

export default defineConfig([
  { 
    files: ["**/*.{js,mjs,cjs}"], 
    plugins: { js }, 
    extends: ["js/recommended"], 
    languageOptions: { 
      globals: { ...globals.browser, ...globals.node }, 
    },
    rules: {
      // Regras obrigatórias
      "semi": ["error", "always"],
      "quotes": ["error", "double"],

      // Qualidade de código e prevenção de bugs
      "eqeqeq": ["error", "always"],
      "no-var": "error",
      "prefer-const": "error",
      "no-unused-vars": ["error", { "argsIgnorePattern": "^_" }],

      // Estética e consistência de formatação
      "object-curly-spacing": ["error", "always"],
      "array-bracket-spacing": ["error", "never"],
      "comma-dangle": ["error", "always-multiline"],
    },
  },
  { 
    files: ["**/*.json"], 
    plugins: { json }, 
    language: "json/json", 
    extends: ["json/recommended"], 
  },
]);