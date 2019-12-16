<<<<<<< Updated upstream
module.exports = {
  setupFilesAfterEnv: [
    "<rootDir>/.jest/mock-fetch.js",
    "<rootDir>/.jest/configure-styled-components.js",
  ],
  transform: {
    "^.+\\.[tj]sx?$": "babel-jest",
    "^.+\\.mdx$": "@storybook/addon-docs/jest-transform-mdx",
  },
  transformIgnorePatterns: [
    // Change MODULE_NAME_HERE to your module that isn't being compiled
    "/node_modules/(?!react-syntax-highlighter).+\\.jsx?$",
  ],
  testRegex: "((\\.|/)(test|spec))\\.([tj]sx?)$",
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/__mocks__/fileMock.js",
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
    "@/(.*)$": "<rootDir>/src/$1",
    "@components(.*)$": "<rootDir>/src/components$1",
    "@constants(.*)$": "<rootDir>/src/components/constants$1",
    "@atoms(.*)$": "<rootDir>/src/components/atoms$1",
    "@molecules(.*)$": "<rootDir>/src/components/molecules$1",
    "@organisms(.*)$": "<rootDir>/src/components/organisms$1",
    "@typography(.*)$": "<rootDir>/src/components/typography$1",
    "@templates(.*)$": "<rootDir>/src/components/templates$1",
    "@utilities(.*)$": "<rootDir>/src/components/utilities$1",
    "@assets(.*)$": "<rootDir>/public$1",
  },
};
=======
module.exports = {
  setupFilesAfterEnv: [
    "<rootDir>/.jest/mock-fetch.js",
    "<rootDir>/.jest/configure-styled-components.js",
  ],
  transform: {
    "^.+\\.[tj]sx?$": "babel-jest",
    "^.+\\.mdx$": "@storybook/addon-docs/jest-transform-mdx",
  },
  transformIgnorePatterns: [
    // Change MODULE_NAME_HERE to your module that isn't being compiled
    '/node_modules/(?!react-syntax-highlighter).+\\.jsx?$'
  ],
  testRegex: "((\\.|/)(test|spec))\\.([tj]sx?)$",
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/__mocks__/fileMock.js",
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
    "@/(.*)$": "<rootDir>/src/$1",
    "@components(.*)$": "<rootDir>/src/components$1",
    "@constants(.*)$": "<rootDir>/src/components/constants$1",
    "@atoms(.*)$": "<rootDir>/src/components/atoms$1",
    "@molecules(.*)$": "<rootDir>/src/components/molecules$1",
    "@organisms(.*)$": "<rootDir>/src/components/organisms$1",
    "@typography(.*)$": "<rootDir>/src/components/typography$1",
    "@templates(.*)$": "<rootDir>/src/components/templates$1",
    "@utilities(.*)$": "<rootDir>/src/components/utilities$1",
    "@assets(.*)$": "<rootDir>/public$1",
  },
};
>>>>>>> Stashed changes
