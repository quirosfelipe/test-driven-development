function myMap(array, cb) {
  const result = [];
  array.forEach((num, i) => {
    result.push(cb(num, i, array));
  });
  return result;
}
module.exports = myMap;
