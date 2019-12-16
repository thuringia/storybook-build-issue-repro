<<<<<<< Updated upstream
import mediaHelper from "styled-media-helper";

export const BREAKPOINTS = {
  mobile: "mobile",
  tablet: "tablet",
  desktop: "desktop",
  wide: "wide",
};
Object.freeze(BREAKPOINTS);

export const breakpoints = {
  [BREAKPOINTS.mobile]: 0,
  [BREAKPOINTS.tablet]: 768,
  [BREAKPOINTS.desktop]: 1024,
  [BREAKPOINTS.wide]: 1440,
};
Object.freeze(breakpoints);

export const media = mediaHelper(breakpoints);

export const SPACES = {
  none: 0,
  tiny: 1,
  small: 2,
  normal: 3,
  medium: 4,
  large: 5,
  huge: 6,
};
Object.freeze(SPACES);

export const spaces = {
  [SPACES.none]: 0,
  [SPACES.tiny]: 4,
  [SPACES.small]: 8,
  [SPACES.normal]: 16,
  [SPACES.medium]: 24,
  [SPACES.large]: 32,
  [SPACES.huge]: 64,
};
Object.freeze(spaces);

export const space = name => `${spaces[name]}px`;

export const spacing = Object.entries(spaces)
  .map(([name, space]) => [name, `${space}px`])
  .reduce((acc, [k, v]) => ({ ...acc, [k]: v }), {});
Object.freeze(spacing);

export default {
  BREAKPOINTS,
  SPACES,
  breakpoints,
  media,
  spaces,
  spacing,
  space,
};
=======
import mediaHelper from 'styled-media-helper';

export const BREAKPOINTS = {
  mobile: 'mobile',
  tablet: 'tablet',
  desktop: 'desktop',
  wide: 'wide'
};
Object.freeze(BREAKPOINTS);

export const breakpoints = {
  [BREAKPOINTS.mobile]: 0,
  [BREAKPOINTS.tablet]: 768,
  [BREAKPOINTS.desktop]: 1024,
  [BREAKPOINTS.wide]: 1440
};
Object.freeze(breakpoints);

export const media = mediaHelper(breakpoints);

export const SPACES = {
  none: 0,
  tiny: 1,
  small: 2,
  normal: 3,
  medium: 4,
  large: 5,
  huge: 6
};
Object.freeze(SPACES);

export const spaces = {
  [SPACES.none]: 0,
  [SPACES.tiny]: 4,
  [SPACES.small]: 8,
  [SPACES.normal]: 16,
  [SPACES.medium]: 24,
  [SPACES.large]: 32,
  [SPACES.huge]: 64
};
Object.freeze(spaces);

export const space = name => `${spaces[name]}px`;

export const spacing = Object.entries(spaces)
  .map(([name, space]) => [name, `${space}px`])
  .reduce((acc, [k, v]) => ({ ...acc, [k]: v }), {});
Object.freeze(spacing);

export default {
  BREAKPOINTS,
  SPACES,
  breakpoints,
  media,
  spaces,
  spacing,
  space
};
>>>>>>> Stashed changes
