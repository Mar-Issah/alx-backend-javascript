/**
 * Represents a class Currency.
 */
export default class Currency {
  /**
   * Creates a new HolbertonCourse instance.
   *
   * @param {String} name - The currency.
   * @param {String} code - The currency symbol.
   */
  constructor(code, name) {
    this.code = code;
    this.name = name;
  }

  get code() {
    return this._code;
  }

  set code(value) {
    this._code = value;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }

  /**
   * Creates the attributes in the following format name (code).
   * @returns {String}
   */
  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }
}
