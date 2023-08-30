// DESCRIPTION:
// Write a function that will check if two given characters are the same case.

// If either of the characters is not a letter, return -1
// If both characters are the same case, return 1
// If both characters are letters, but not the same case, return 0
// Examples
// 'a' and 'g' returns 1

// 'A' and 'C' returns 1

// 'b' and 'G' returns 0

// 'B' and 'g' returns 0

// '0' and '?' returns -1


// SOLUTION:
const isNotLetter = s => s === s.toUpperCase() && s === s.toLowerCase();
const defineCase = s => s === s.toUpperCase() ? 'U' : 'L';
function sameCase (a,b){
  if (isNotLetter(a) || isNotLetter(b)) return -1;
  return defineCase(a) === defineCase(b) ? 1:0;
}