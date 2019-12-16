import PropTypes from 'prop-types';
import React from 'react';
import styled, { css } from 'styled-components';
import {
  applyStyleModifiers,
  styleModifierPropTypes
} from 'styled-components-modifiers';

import hasMod from '@utilities/_hasMod';
import { TextButton } from '@typography/';

const BUTTON_MODIFIER = {
  primary: ({ theme: { colors }, modifiers }) => css`
    color: white;
    background: ${colors.highlight};
    border-color: ${colors.highlight};

    &:hover {
      background: ${!hasMod('disabled', modifiers) && colors.highlightHover};
    }
  `,
  secondary: ({ theme: { colors }, modifiers }) => css`
    color: ${colors.accent};
    background: transparent;
    border-color: ${colors.accent};
    ${!hasMod('disabled', modifiers) &&
    css`
      &:hover {
        border-color: ${colors.accent};
        background: ${colors.accent};
        color: white;
      }
    `}
  `,
  disabled: () => css`
    opacity: 0.4;
    cursor: not-allowed;
  `
};

const BUTTON_MODIFIER_DEFAULT = 'primary';

// TODO check if we want to use `styled-by` -> https://github.com/brunobertolini/styled-by
const ButtonBase = styled.button`
  cursor: pointer;
  display: inline-block;
  padding: 1rem 1.5rem;
  border-radius: 0 25px;
  border-width: 1px;
  border-style: solid;
  outline: none;

  ${applyStyleModifiers(BUTTON_MODIFIER)};
`;

ButtonBase.Text = TextButton;

function Button({ children, modifiers, ...rest }) {
  return (
    <ButtonBase modifiers={modifiers || BUTTON_MODIFIER_DEFAULT} {...rest}>
      <ButtonBase.Text>{children}</ButtonBase.Text>
    </ButtonBase>
  );
}

Button.propTypes = {
  modifiers: styleModifierPropTypes(BUTTON_MODIFIER),
  children: PropTypes.any,
  className: PropTypes.string
};

export default Button;
