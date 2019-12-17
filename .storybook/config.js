import "@storybook/addon-console";

import React from "react";
import { withConsole } from "@storybook/addon-console";
import { withKnobs } from "@storybook/addon-knobs/react";
import { configure, addParameters, addDecorator } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import requireContext from "require-context.macro";

import { theme } from "@constants/theme";
import GlobalStyle from "@components/global-style";

import customtheme from "./custom.theme";

addParameters({
  options: {
    theme: customtheme,
    isToolshown: true,
    panelPosition: "bottom",
  },
  viewport: {
    viewports: {
      fill: {
        /**
         * name to display in the dropdown
         * @type {String}
         */
        name: "Responsive",

        /**
         * Inline styles to be applied to the story (iframe).
         * styles is an object whose key is the camelCased version of the style name, and whose
         * value is the style’s value, usually a string
         * @type {Object}
         */
        styles: {
          width: "100%",
          height: "100%",
        },

        /**
         * type of the device (e.g. desktop, mobile, or tablet)
         * @type {String}
         */
        type: "desktop",
      },
      mobile: {
        name: "mobile",
        styles: {
          width: "375px",
          height: "700px",
        },
        type: "mobile",
      },
      tablet: {
        name: "tablet",
        styles: {
          width: "768px",
          height: "700px",
        },
        type: "tablet",
      },
      desktop: {
        name: "desktop",
        styles: {
          width: "1024px",
          height: "700px",
        },
        type: "desktop",
      },
      widescreen: {
        name: "widescreen",
        styles: {
          width: "1440px",
          height: "700px",
        },
        type: "desktop",
      },
    },
    defaultViewport: "responsive",
  },
});

addDecorator(storyFn => <React.StrictMode>{storyFn()}</React.StrictMode>);
addDecorator((storyFn, context) => withConsole()(storyFn)(context));
addDecorator(withKnobs);
addDecorator(storyFn => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    {storyFn()}
  </ThemeProvider>
));

configure(
  [
    requireContext("../src/components", true, /\.stories\.(jsx?|mdx)$/),
    requireContext("../docs", true, /\.stories\.(jsx?|mdx)$/),
  ],
  module
);
