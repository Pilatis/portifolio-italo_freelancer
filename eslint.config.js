import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import pluginReactHooks from "eslint-plugin-react-hooks";

export default defineConfig([
  { 
    files: ["**/*.{js,jsx,ts,tsx}"],
    languageOptions: { 
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: { jsx: true },
      },
    },
    plugins: {
      "react": pluginReact,
      "react-hooks": pluginReactHooks,
    },
    rules: {
      "react/react-in-jsx-scope": "off",
      "react/jsx-uses-react": "error",
      "react/jsx-uses-vars": "error",
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { 
          "varsIgnorePattern": "^React$",
          "argsIgnorePattern": "^_",
        }
      ],
      "@typescript-eslint/no-shadow": "error",
      "indent": ["error", 2],
    },
  },
  tseslint.configs.recommended,
]);