module.exports = {
  root: true,
  extends: ["@react-native-community", "plugin:prettier/recommended"],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "import"],
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      rules: {
        "no-shadow": "off",
        "no-undef": "off",
      },
    },
  ],
  rules: {
    "import/order": [
      "error",
      {
        "newlines-between": "always",
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
      },
    ],
  },
};
