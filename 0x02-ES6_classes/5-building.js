/**
 * Represents a class Building.
 */
export default class Building {
  /**
   * Creates a new Building instance.
   *
   * @param {Number} sqft - Square feet of the building.
   */
  constructor(sqft) {
    this.sqft = sqft;
    if (this.constructor !== Building) {
      if (typeof this.evacuationWarningMessage !== 'function') {
        throw new Error('Class extending Building must override evacuationWarningMessage');
      }
    }
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(value) {
    this._sqft = value;
  }
}
