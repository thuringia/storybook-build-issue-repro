import React from "react";
import DynamicText from "@atoms/dynamic-text/DynamicText";
import styled from "styled-components";

import { theme } from "@constants/theme";
import PropTypes from "prop-types";

const {
  button,
  heading,
  copy,
  small,
  smallHighlight,
  smallMeta,
  nav,
  price,
} = theme.textStyles;

/*
 * Button
 */
const Button = props => (
  <DynamicText {...button} {...props}>
    {props.children}
  </DynamicText>
);

export const TextButton = styled(Button)`
  text-transform: uppercase;
`;

export const TextHeading = props => (
  <DynamicText {...heading} {...props}>
    {props.children}
  </DynamicText>
);

/*
 * Copy
 */
export const TextCopy = props => (
  <DynamicText {...copy} {...props}>
    {props.children}
  </DynamicText>
);

export const TextCopyGrey = props => (
  <DynamicText {...copy} {...props} color={theme.colors.meta}>
    {props.children}
  </DynamicText>
);

export const TextCopyDemi = props => (
  <DynamicText {...copy} {...props} fontWeight={600}>
    {props.children}
  </DynamicText>
);

/*
 * Caps
 */
const Caps = props => (
  <DynamicText {...button} {...props} fontWeight={600}>
    {props.children}
  </DynamicText>
);

export const TextCaps = styled(Caps)`
  text-transform: uppercase;
`;

/*
 * Small
 */
export const TextSmall = props => (
  <DynamicText {...small} {...props}>
    {props.children}
  </DynamicText>
);

export const TextSmallHighlight = props => (
  <DynamicText {...smallHighlight} {...props}>
    {props.children}
  </DynamicText>
);

export const TextSmallMeta = props => (
  <DynamicText {...smallMeta} {...props}>
    {props.children}
  </DynamicText>
);

/*
 * Navigation
 */
const Nav = props => (
  <DynamicText {...nav} {...props}>
    {props.children}
  </DynamicText>
);

export const TextNav = styled(Nav)`
  &:hover,
  &:active {
    color: ${props => props.theme.colors.highlight};
  }
`;

export const TextTeaser = props => (
  <DynamicText {...nav} {...props} color={theme.colors.accent}>
    {props.children}
  </DynamicText>
);

/*
 * Price
 */

export const TextPrice = props => (
  <DynamicText {...price} {...props}>
    {props.children}
  </DynamicText>
);

/*
 * LINT: (╯°□°)╯︵ ┻━┻
 */
Button.propTypes = { children: PropTypes.any };
TextHeading.propTypes = { children: PropTypes.any };
TextCopy.propTypes = { children: PropTypes.any };
TextCopyGrey.propTypes = { children: PropTypes.any };
TextCopyDemi.propTypes = { children: PropTypes.any };
Caps.propTypes = { children: PropTypes.any };
TextSmall.propTypes = { children: PropTypes.any };
TextSmallHighlight.propTypes = { children: PropTypes.any };
TextSmallMeta.propTypes = { children: PropTypes.any };
Nav.propTypes = { children: PropTypes.any };
TextTeaser.propTypes = { children: PropTypes.any };
TextPrice.propTypes = { children: PropTypes.any };
/*
 * LINT: ┬─┬ノ(ಠ_ಠノ)
 */
