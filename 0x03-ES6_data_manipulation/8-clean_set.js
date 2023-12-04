/**
 * Joins a set of strings with - after implementing sub string.
 * @function
 * @param {Set<String>} set - The set.
 * @param {String} startString - The string at the beginning
 * of each item in the set.
 * @returns {String}
 */
export default function cleanSet(set, startString) {
  const result = [];
  if (!set || !startString || !(set instanceof Set) || typeof startString !== 'string') {
    return '';
  }
  for (const value of set.values()) {
    if (typeof value === 'string' && value.startsWith(startString)) {
      const subString = value.substring(startString.length);

      if (subString && subString !== value) {
        result.push(subString);
      }
    }
  }
  return result.join('-');
}
