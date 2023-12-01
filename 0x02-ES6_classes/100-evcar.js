import Car from './10-car';

/**
 * Represents a class EVCar.
 */
export default class EVCar extends Car {
  /**
   * Creates a new Building instance.
   *
   * @param {String} brand - The brand of the car.
   * @param {String} motor - The motor of the car.
   * @param {String} color - The color of the car.
   * @param {String} range - The range of the car.
   */
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this.range = range;
  }

  get range() {
    return this._range;
  }

  set range(value) {
    this._range = value;
  }

  cloneCar() {
    const Species = super.constructor[Symbol.species];

    return new Species();
  }
}
