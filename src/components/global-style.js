import { createGlobalStyle } from "styled-components";
import reboot from "styled-reboot";
import { FONT_FACES } from "@constants/fonts";

const options = {
  headingsMarginBottom: "0",
  paragraphMarginBottom: "0",
  labelMarginBottom: "0",
  tableCellPadding: "0",
};

const rebootCss = reboot(options);

const GlobalStyle = createGlobalStyle`
  ${rebootCss}
  ${FONT_FACES}

  h1, h2, h3, h4, h5 {
    font-weight: normal;
  }

  ul, li {
    margin: unset;
    padding: unset;
  }

  body {
    color: ${props => props.theme.colors.dark};
    font-family: ${props => props.theme.fontFamily.body};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

export default GlobalStyle;
