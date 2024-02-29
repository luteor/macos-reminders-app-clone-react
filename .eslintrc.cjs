module.exports = {
  root: true,
  env: { browser: true, es2020: true, node: true },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "plugin:perfectionist/recommended-natural",
    "prettier",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  settings: {
    react: { version: "18.2" },
    "import/resolver": {
      alias: {
        extensions: [".js", ".jsx"],
        map: [
          ["@assets", "./src/assets"],
          ["@components", "./src/components"],
          ["@contexts", "./src/contexts"],
          ["@hooks", "./src/hooks"],
          ["@utils", "./src/utils"],
          ["public", "./public"],
        ],
      },
    },
  },
  plugins: ["react-refresh", "perfectionist"],
  rules: {
    "react/jsx-no-target-blank": "off",
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "react/prop-types": "off",
    "perfectionist/sort-imports": [
      "error",
      {
        type: "natural",
        order: "asc",
        groups: [
          "type",
          "react",
          "nanostores",
          ["builtin", "external"],
          "internal-type",
          "internal",
          ["parent-type", "sibling-type", "index-type"],
          ["parent", "sibling", "index"],
          "side-effect",
          "style",
          "object",
          "unknown",
        ],
        "custom-groups": {
          value: {
            react: ["react", "react-*"],
            nanostores: "@nanostores/**",
          },
          type: {
            react: "react",
          },
        },
        "newlines-between": "always",
        "internal-pattern": [
          "@/assets/**",
          "@/components/**",
          "@/contexts/**",
          "@/hooks/**",
          "@/lib/**",
          "@/pages/**",
          "@/stores/**",
          "@/utils/**",
          "public/**",
        ],
      },
    ],
  },
};
