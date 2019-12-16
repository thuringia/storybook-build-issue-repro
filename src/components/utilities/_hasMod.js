<<<<<<< Updated upstream
/**
 * Utility to check if modifier is set / included in Components Modifier Prop Value
 * @param {string} mod - modifier to check for
 * @param {(string|array)} mods - components modifier prop value to compare / search in
 * @return {Boolean}
 */
const hasMod = (mod, mods) => {
  let bool = false;

  if (Array.isArray(mods)) {
    bool = mods.includes(mods);
  } else {
    bool = mod === mods;
  }

  return bool;
};

export default hasMod;
=======
/**
 * Utility to check if modifier is set / included in Components Modifier Prop Value
 * @param {string} mod - modifier to check for
 * @param {(string|array)} mods - components modifier prop value to compare / search in
 * @return {Boolean}
 */
const hasMod = (mod, mods) => {
  let bool = false;

  if (Array.isArray(mods)) {
    bool = mods.includes(mods);
  } else {
    bool = mod === mods;
  }

  return bool;
};

export default hasMod;
>>>>>>> Stashed changes
