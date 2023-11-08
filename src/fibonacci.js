/**
 * @desc Returns n number of fibonacci sequence
 * @param n {Number} Number of fibonacci sequence
 */
function getFibonacci(n) {
  if (n === 1) {
    return 1;
  }

  if (n <= 0) {
    return 0;
  }

  return getFibonacci(n - 1) + getFibonacci(n - 2);
}

module.exports = getFibonacci;
