const path = require("path")

module.exports = {
  root: true,
  env: { browser: true, node: true, es2022: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended-type-checked",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:storybook/recommended",
    "prettier",
  ],
  ignorePatterns: [
    "dist",
    ".eslintrc.cjs",
    "vite.config.ts",
    "tailwind.config.js",
    "postcss.config.js",
    "stories/",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
    project: ['./tsconfig.json', './webnazo-front/tsconfig.json', './webnazo-back/tsconfig.json'],
    tsconfigRootDir: __dirname,
  },
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
    "import/resolver": {
      typescript: {
        alwaysTryTypes: true,
        project: ['./tsconfig.json', './webnazo-front/tsconfig.json', './webnazo-back/tsconfig.json'],
      },
      node: true,
    },
    react: {
      version: "detect",
    },
  },
  plugins: ["@typescript-eslint","react-refresh"],
  rules: {
    eqeqeq: "error",
    "no-console": "warn",
    "max-lines": ["warn", 120],
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "max-lines-per-function": ["warn", { max: 50, skipBlankLines: true }],
    "max-depth": ["warn", 3],
    complexity: ["warn", 5],
    "@typescript-eslint/naming-convention": [
      "error",
      {
        selector: "variable",
        format: ["camelCase", "PascalCase"],
        leadingUnderscore: "allow",
      },
      {
        selector: "function",
        format: ["camelCase", "PascalCase"],
      },
      {
        selector: "parameter",
        format: ["camelCase"],
        leadingUnderscore: "allow",
      },
      {
        selector: "class",
        format: ["PascalCase"],
      },
      {
        selector: "method",
        format: ["camelCase"],
      },
      {
        selector: "property",
        format: ["camelCase"],
      },
      {
        selector: "interface",
        format: ["PascalCase"],
      },
      {
        selector: "typeAlias",
        format: ["PascalCase"],
      },
      {
        selector: "typeParameter",
        format: ["camelCase"],
      },
      {
        selector: "enum",
        format: ["PascalCase"],
      },
      {
        selector: "enumMember",
        format: ["UPPER_CASE"],
      },
    ],
    "@typescript-eslint/strict-boolean-expressions": [
      "warn",
      { allowString: false, allowNumber: false, allowNullableObject: false },
    ],
    "no-implicit-coercion": "error",
    "@typescript-eslint/restrict-plus-operands": [
      "error",
      {
        allowAny: true,
        allowBoolean: false,
        allowNullish: false,
        allowNumberAndString: false,
        allowRegExp: false,
        skipCompoundAssignments: false,
      },
    ],
    "prefer-template": "error",
    "@typescript-eslint/no-unused-vars": [
      "error",
      { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
    ],
    "react/react-in-jsx-scope": "off",
    "react/jsx-no-leaked-render": [
      "error",
      {
        validStrategies: ["ternary"],
      },
    ],
    "react-hooks/exhaustive-deps": "error",
    "react-hooks/rules-of-hooks": "error",
    "import/no-cycle": "error",
  },
  overrides: [
    {
      files: ['./webnazo-front/**/*.ts', './webnazo-front/**/*.tsx'],
      env: {
        browser: true,
      }
    },
    {
      files: ['./webnazo-back/**/*.ts'],
      env: {
        node: true,
      },
    },
  ],
}
