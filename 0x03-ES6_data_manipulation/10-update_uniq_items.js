/**
 * Update the value to 100 where val is 1.
 * @function
 * @param {Map<String, number>} map - A map
 *
 */
export default function updateUniqueItems(map) {
  if (!(map instanceof Map)) {
    throw new Error('Cannot process');
  }
  map.forEach((value, key) => {
    if (value === 1) {
      map.set(key, 100);
    }
  });
}
