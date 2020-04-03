function reverseString(string) {
  const split = string.split('');
  return split.reverse().join('');
}

module.exports = reverseString;
