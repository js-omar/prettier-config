module.exports = {
  singleQuote: true,
  tabWidth: 2,
  overrides: [
    { files: ["**/*.{html,scss}"], options: { printWidth: 500 } },
    { files: ["**/*.html"], options: { parser: "html" } },
    {
      files: ["**/*.{modal,component,page}.html"],
      options: { parser: "angular" },
    },
  ],
};
