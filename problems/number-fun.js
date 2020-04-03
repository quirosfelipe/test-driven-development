function returnThree() {
  return 3;
}

function reciprocal(num) {
  if (num < 1 || num > 1000000) {
    throw TypeError('Out of acceptable range');
  }
  return (1 / num).toFixed(8);
}
module.exports = { returnThree, reciprocal };
