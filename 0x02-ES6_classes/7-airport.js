/**
 * Represents a class Airport.
 */
export default class Airport {
  /**
   * Creates a new Building instance.
   *
   * @param {String} name - Airport name.
   * @param {String} code - Airport code.
   */
  constructor(name, code) {
    this.name = name;
    this.code = code;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }

  get code() {
    return this._code;
  }

  set code(value) {
    this._code = value;
  }

  get [Symbol.toStringTag]() {
    return this._code;
  }
}
