/**
 * Checks if a set contains each el in array.
 * @function
 * @param {Set} set - The set.
 * @param {*} array - The array.
 * @returns {Boolean}
 */
export default function hasValuesFromArray(set, array) {
  return array.every((value) => set.has(value));
}
