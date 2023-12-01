/**
 * Represents a class HolbertonClass.
 */
export default class HolbertonClass {
  /**
   * Creates a new Building instance.
   *
   * @param {String} size - Holberton Class size.
   * @param {String} location - Holberton Class location.
   */
  constructor(size, location) {
    this.size = size;
    this.location = location;
  }

  get size() {
    return this._size;
  }

  set size(value) {
    this._size = value;
  }

  get location() {
    return this._location;
  }

  set location(value) {
    this._location = value;
  }

  [Symbol.toPrimitive](hint) {
    if (hint === 'number') {
      return this.size;
    }
    if (hint === 'string') {
      return this.location;
    }
    return this;
  }
}
