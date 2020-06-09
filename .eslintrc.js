module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  extends: ["react-app", "airbnb", "prettier", "prettier/react"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
  },
  plugins: ["react", "import", "jsx-a11y", "eslint-plugin-import-helpers"],
  rules: {
    "react/jsx-filename-extension": [
      0,
      {
        extensions: [".tsx"],
      },
    ],
    "import/prefer-default-export": "off",
    "import/extensions": [0, "never"],
    "react/prop-types": [0],
    //
    "import-helpers/order-imports": [
      "warn",
      {
        newlinesBetween: "always",
        groups: ["/^react/", "module", "/^~/", ["parent", "sibling", "index"]],
        alphabetize: { order: "asc", ignoreCase: true },
      },
    ],
  },
  settings: {
    "import/parsers": {},
    "import/resolver": {},
  },
};
