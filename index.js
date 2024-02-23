module.exports = {
  singleQuote: true,
  tabWidth: 2,
  overrides: [
    { files: ["**/*.{html,scss,css}"], options: { printWidth: 500 } },
    { files: ["**/*.html"], options: { parser: "html" } },
    {
      files: [
        "**/*.dialog.html",
        "**/*.section.html",
        "**/*.component.html",
        "**/*.modal.html",
        "**/*.page.html",
      ],
      options: { parser: "angular" },
    },
  ],
};
