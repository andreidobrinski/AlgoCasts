// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  // issue with this solution:
  // it does twice as much work as it needs to b/c it iterates on the
  // entire array, comparing array items twice instead of just once
  return str
    .split('')
    .every((char, i) => {
      return char === str[str.length - i - 1];
    })
  // i is the index in the array
}

function palindromeOne(str) {
  const reversed = str.split('').reverse().join('');

  return str === reversed;
}

module.exports = palindrome;
