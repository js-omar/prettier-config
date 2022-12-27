module.exports = {
  singleQuote: true,
  tabWidth: 2,
  overrides: [
    { files: ["**/*.{html,scss,css}"], options: { printWidth: 500 } },
    { files: ["**/*.html"], options: { parser: "html" } },
    {
      files: ["**/*.modal.html", "**/*.page.html", "**/*.component.html"],
      options: { parser: "angular" },
    },
  ],
};
