module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ["airbnb", "plugin:prettier/recommended", "prettier/react"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "no-console": "off",
    "react/jsx-filename-extension": [
      1,
      {
        extensions: [".js", ".jsx"],
      },
    ],
    "react/jsx-props-no-spreading": "off",
  },
  overrides: [
    {
      files: ["server/**"],
      rules: {
        "no-console": "off",
        "no-unused-vars": "off",
      },
    },
  ],
  parser: "babel-eslint",
};
