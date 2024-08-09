module.exports = {
  root: true,
  env: { browser: true, node: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended-type-checked",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "prettier",
  ],
  ignorePatterns: [
    "dist",
    ".eslintrc.cjs",
    "vite.config.ts",
    "tailwind.config.js",
    "postcss.config.js",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    sourceType: "module",
    ecmaVersion: "latest",
    ecmaFeatures: {
      jsx: true,
    },
    project: true,
    tsconfigRootDir: __dirname,
  },
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
    "import/resolver": {
      typescript: {
        alwaysTryTypes: true,
        project: ["./tsconfig.json"],
      },
      node: true,
    },
  },
  plugins: [],
  rules: {
    eqeqeq: "error",
    "no-console": ["warn", { allow: ["error"] }],
    "no-warning-comments": [
      "warn",
      { terms: ["todo", "fixme", "memo"], location: "anywhere" },
    ],
    "max-lines": ["warn", 200],
    "max-lines-per-function": ["warn", { max: 30, skipBlankLines: true }],
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
      {
        allowString: false,
        allowNumber: false,
        allowNullableObject: false,
      },
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
    "import/no-cycle": "error",
  },
}
