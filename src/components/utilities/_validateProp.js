/**
 * @param {string} propName - represents the name of the prop i.E. `type`
 * @param {string} prop - actual value of the prop i.E. `primary`
 * @param {array} validProps - array of valid props i.E. ['primary', 'secondary']
 * @return {(void|Boolean)}
 */
export const validateProp = (propName, prop, validProps) => {
  const isValid = validProps.includes(prop);
  if (isValid) return;
  console.warn(
    `${prop} is not a valid input for ${propName}. Valid Props: ${validProps}`
  );
};
