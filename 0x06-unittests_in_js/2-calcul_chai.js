const calculateNumber = (operator, a, b) => {
  if (operator === 'SUM') {
    return Math.round(a) + Math.round(b);
  }
  if (operator === 'SUBTRACT') {
    return Math.round(a) - Math.round(b);
  }
  if (operator === 'DIVIDE') {
    return Math.round(b) === 0 ? 'Error' : Math.round(a) / Math.round(b);
  }
  return 0;
};

module.exports = calculateNumber;
