// Chapter 1 is UniqueImplement an algorithm to determine if a string has all unique characters. What if you cannot use additional data structures. 

let allUniqueChars = function (string) {
 for (let i = 0; i < string.length; i++) {
  for (let j = 0; j < string.length; j++) {
   if (string[i] === string[j]) {
    return false; // if match, return flase
   }
  }
 }
 return true; // if not match, return true
};

console.log(allUniqueChars('Gregg'));




// Kennys code on finding a unique 
const string = 'abcdefg';

function returnStringIsUnique(s) {
 const map = new Map();
 for (let i = 0; i < s.length; i++) {
  if (map.has(s.charAt(i))) {
   return false;
  }
  map.set(s.charAt(i));
 }
 return true;
}

console.log(returnStringIsUnique(string));
