import * as TEXT_STYLES from "./textstyles";
import grid, { breakpoints, spacing } from "./grid";
import THEME_FONTS from "./fonts";
import THEME_COLORS from "./colors";

export { default as grid } from "./grid";

export const theme = {
  grid,
  breakpoints,
  spacing,
  colors: THEME_COLORS,
  textStyles: TEXT_STYLES,
  fontSizes: [12, 14, 16, 18, 24, 28, 36, 48],
  fontFamily: THEME_FONTS,
};

export default theme;
