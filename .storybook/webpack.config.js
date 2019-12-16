const { addAliases, addLoaders, addPlugins } = require("../webpack-extensions");

module.exports = ({ config }) => {
  // Transpile Gatsby module because Gatsby includes un-transpiled ES6 code.
  config.module.rules[0].exclude = [/node_modules\/(?!(gatsby)\/)/];

  config.module.rules.push({
    test: /\.stories\.jsx?$/,
    loaders: [
      {
        loader: require.resolve("@storybook/source-loader"),
        options: {
          uglyCommentsRegex: [/^eslint-.*/, /^global.*/],
        },
      },
    ],
    enforce: "pre",
  });

  // load import aliases like @component
  //config = addLoaders(config);
  config = addAliases(config);
  //config = addPlugins(config);

  return config;
};
