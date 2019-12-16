const path = require("path");

const LodashModuleReplacementPlugin = require("lodash-webpack-plugin");

const addAliases = (config = { resolve: { alias: {} } }) => {
  config.resolve.alias["@"] = path.join(__dirname, "src");
  config.resolve.alias["@components"] = path.join(
    __dirname,
    "src",
    "components"
  );
  config.resolve.alias["@constants"] = path.join(
    __dirname,
    "src",
    "components",
    "constants"
  );
  config.resolve.alias["@atoms"] = path.join(
    __dirname,
    "src",
    "components",
    "atoms"
  );
  config.resolve.alias["@molecules"] = path.join(
    __dirname,
    "src",
    "components",
    "molecules"
  );
  config.resolve.alias["@organisms"] = path.join(
    __dirname,
    "src",
    "components",
    "organisms"
  );
  config.resolve.alias["@typography"] = path.join(
    __dirname,
    "src",
    "components",
    "typography"
  );
  config.resolve.alias["@constants"] = path.join(
    __dirname,
    "src",
    "components",
    "constants"
  );
  config.resolve.alias["@templates"] = path.join(
    __dirname,
    "src",
    "components",
    "templates"
  );
  config.resolve.alias["@utilities"] = path.join(
    __dirname,
    "src",
    "components",
    "utilities"
  );
  config.resolve.alias["@assets"] = path.join(__dirname, "public");
  config.resolve.alias["@icons"] = path.join(
    __dirname,
    "public",
    "img",
    "icons"
  );

  return config;
};

const addLoaders = (config = { module: { rules: [] } }) => {
  const rules = config.module.rules;

  // modify storybook's file-loader rule to avoid conflicts with svgr
  const pathToInlineSvg = path.resolve(__dirname, "./public/img/icons/");
  const fileLoaderRule = rules.find(rule => rule.test.test(".svg"));
  fileLoaderRule.exclude = pathToInlineSvg;

  rules.push({
    test: /\.svg$/,
    include: pathToInlineSvg,
    use: [
      {
        loader: "@svgr/webpack",
        options: {
          icon: true,
        },
      },
    ],
  });

  return config;
};

const addPlugins = (config = { plugins: [] }) => {
  config.plugins.push(new LodashModuleReplacementPlugin());

  return config;
};

module.exports = {
  addAliases,
  addLoaders,
  addPlugins,
};
