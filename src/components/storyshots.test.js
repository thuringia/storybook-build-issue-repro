import initStoryshots from "@storybook/addon-storyshots";

initStoryshots({
  /* ignore stories with knobs */
  storyNameRegex: /^((?!.*?Knobs).)*$/,
});
