module.exports = {
  presets: [
    [
      "gatsby",
      {
        corejs: 3,
        targets: {
          node: "current",
          browsers: [
            "last 2 Chrome versions",
            "last 2 Firefox versions",
            "Firefox ESR",
          ],
        },
      },
    ],
  ],
  plugins: ["transform-do-expressions", "lodash"],
};
