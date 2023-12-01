import Building from './5-building';

/**
 * Represents a class SkyHighBuilding extends Building.
 */
export default class SkyHighBuilding extends Building {
  /**
   * Creates a new SkyHighBuilding instance.
   *
   * @param {Number} sqft - Square feet of the building.
   * @param {Number} floors - Number of floors in the building.
   */
  constructor(sqft, floors) {
    super(sqft);
    this.floors = floors;
  }

  get floors() {
    return this._floors;
  }

  set floors(value) {
    this._floors = value;
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this.floors} floors`;
  }
}
