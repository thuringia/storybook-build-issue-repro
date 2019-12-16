<<<<<<< Updated upstream
/*
 * FontSizes
 * Index || Value
 * 0 = 12;
 * 1 = 14;
 * 2 = 16;
 * 3 = 18;
 * 4 = 24;
 * 5 = 28;
 * 6 = 36;
 * 7 = 48;
 */

import THEME_FONTS from "./fonts";
import THEME_COLORS from "./colors";

export const heading = {
  as: "h1",
  fontSize: 7,
  fontWeight: "normal",
  fontFamily: THEME_FONTS.heading,
};

export const copy = {
  as: "p",
  fontSize: 2,
  fontWeight: "normal",
  lineHeight: 1.38,
  color: "currentColor",
};

export const small = {
  as: "span",
  fontSize: 0,
  lineHeight: 1.33,
};

export const smallHighlight = {
  ...small,
  fontWeight: 600,
  color: THEME_COLORS.highlight,
};

export const smallMeta = {
  ...small,
  color: THEME_COLORS.meta,
};

export const button = {
  as: "span",
  fontSize: 0,
  fontWeight: "bold",
  lineHeight: "normal",
  color: "currentColor",
};

export const nav = {
  as: "span",
  fontSize: 3,
  fontFamily: THEME_FONTS.heading,
};

export const price = {
  as: "span",
  fontSize: 1,
  fontWeight: 600,
  color: THEME_COLORS.highlight,
};
=======
/*
 * FontSizes
 * Index || Value
 * 0 = 12;
 * 1 = 14;
 * 2 = 16;
 * 3 = 18;
 * 4 = 24;
 * 5 = 28;
 * 6 = 36;
 * 7 = 48;
 */

import THEME_FONTS from './fonts';
import THEME_COLORS from './colors';

export const heading = {
  as: 'h1',
  fontSize: 7,
  fontWeight: 'normal',
  fontFamily: THEME_FONTS.heading
};

export const copy = {
  as: 'p',
  fontSize: 2,
  fontWeight: 'normal',
  lineHeight: 1.38,
  color: 'currentColor'
};

export const small = {
  as: 'span',
  fontSize: 0,
  lineHeight: 1.33
};

export const smallHighlight = {
  ...small,
  fontWeight: 600,
  color: THEME_COLORS.highlight
};

export const smallMeta = {
  ...small,
  color: THEME_COLORS.meta
};

export const button = {
  as: 'span',
  fontSize: 0,
  fontWeight: 'bold',
  lineHeight: 'normal',
  color: 'currentColor'
};

export const nav = {
  as: 'span',
  fontSize: 3,
  fontFamily: THEME_FONTS.heading
};

export const price = {
  as: 'span',
  fontSize: 1,
  fontWeight: 600,
  color: THEME_COLORS.highlight
};
>>>>>>> Stashed changes
