<<<<<<< Updated upstream
import React from "react";
import { select, text } from "@storybook/addon-knobs/react";

import Button from "./";

export default {
  title: "Atoms/Button",
  component: Button,
};

const values = {
  text: "Hallo",
  variant: {
    Primary: "primary",
    Secondary: "secondary",
  },
  state: {
    Active: false,
    Disabled: "disabled",
  },
  variant_default: "primary",
  state_default: false,
};

const getMods = () => [
  select("Variant", values.variant, values.variant_default),
  select("State", values.state, values.state_default),
];

export const withKnobs = () => (
  <Button modifiers={getMods()}>{text("Button Text", values.text)}</Button>
);
=======
import React from 'react';
import { select, text } from '@storybook/addon-knobs/react';

import Button from './';

export default {
  title: 'Atoms/Button',
  component: Button
};

const values = {
  text: 'Hallo',
  variant: {
    Primary: 'primary',
    Secondary: 'secondary'
  },
  state: {
    Active: false,
    Disabled: 'disabled'
  },
  variant_default: 'primary',
  state_default: false
};

const getMods = () => [
  select('Variant', values.variant, values.variant_default),
  select('State', values.state, values.state_default)
];

export const withKnobs = () => (
  <Button modifiers={getMods()}>{text('Button Text', values.text)}</Button>
);
>>>>>>> Stashed changes
