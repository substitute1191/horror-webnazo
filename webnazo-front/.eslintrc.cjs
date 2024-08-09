module.exports = {
  overrides: [
    {
      files: ["**/*.test.js", "**/*.test.jsx", "**/*.test.ts", "**/*.test.tsx"],
      rules: {
        "react/display-name": "off",
        "@typescript-eslint/naming-convention": [
          "error",
          {
            selector: "property",
            format: ["camelCase", "PascalCase"],
            filter: {
              regex: "^(__esModule|Content-Type|Accept|Authorization)$",
              match: false,
            },
          },
        ],
        "max-lines-per-function": "off",
      },
    },
  ],
}
