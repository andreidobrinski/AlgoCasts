// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  return str
    .split('')
    .reduce((reversed, character) => {
      return character + reversed;
    }, '');
}

function reverseRefactored(str) {
  return str
    .split('')
    .reduce((rev, char) => char + rev, '');
}

function reverseTwo(str) {
  let reversed = '';

  for (let character of str) {
    reversed = character + reversed;
  }

  return reversed;
}

function reverseOne(str) {
  const arr = str.split('');
  arr.reverse();
  return arr.join('');
}

function reverseOneRefactored(str) {
  return str
    .split('')
    .reverse()
    .join('');
}

module.exports = reverse;
