const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('adds two floating point whole numbers', () => {
    assert.strictEqual(calculateNumber(2.0, 3.0), 5);
  });

  it("rounds down b's floating point fractional number", () => {
    assert.strictEqual(calculateNumber(2.0, 3.8), 6);
  });

  it("rounds down a and b's floating point fractional numbers", () => {
    assert.strictEqual(calculateNumber(2.6, 3.9), 7);
  });

  it("rounds down a's floating point fractional number", () => {
    assert.strictEqual(calculateNumber(2.3, 3.0), 5);
  });

  it("rounds up b's floating point fractional numbers", () => {
    assert.strictEqual(calculateNumber(4.5, 3.5), 9);
  });

  it("rounds up a and b's floating point fractional numbers", () => {
    assert.strictEqual(calculateNumber(3.2, 4.9), 8);
  });

  it("rounds up a's floating point fractional numbers", () => {
    assert.strictEqual(calculateNumber(5.7, 3.0), 9);
  });

  it("rounds down a and b floating point fractional numbers with trailing 9's", () => {
    assert.strictEqual(calculateNumber(3.99999, 5.99999), 10);
  });
});
