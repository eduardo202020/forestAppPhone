// eslint.config.js
import js from "@eslint/js";
import ts from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import react from "eslint-plugin-react";
import reactNative from "eslint-plugin-react-native";

export default [
   js.configs.recommended,
   ts.configs.recommended,
   react.configs.recommended,
   {
      files: ["**/*.ts", "**/*.tsx"],
      languageOptions: {
         parser: tsParser,
      },
      plugins: { ts, react, reactNative },
      rules: {
         "@typescript-eslint/no-unused-vars": "warn",
         "react-native/no-inline-styles": "warn",
         "react-native/no-unused-styles": "warn",
         "react/react-in-jsx-scope": "off",
      },
   },
];
