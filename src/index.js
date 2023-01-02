module.exports = function reverse (n) {
  let result = '';
  if (String(n)[0] == '-') {
    for (let i = String(n).length - 1; i > 0; i--) {
      result += String(n)[i];
    }
  }
  else {
    for (let i = String(n).length - 1; i >= 0; i--) {
      result += String(n)[i];
    }
  }
  return +result;
}
