// Chapter 1 is UniqueImplement an algorithm to determine if a string has all unique characters. What if you cannot use additional data structures. 


// Your current approach is checking the same string so it will always return false.
// Set the initial value of j to i + 1;
// also, you need to check against the characters. This method iterates through "Gregg" and not "G", "r", "e" etc.
// use string.charAt(index)

let allUniqueChars = function (string) {
 for (let i = 0; i < string.length; i++) {
  for (let j = i + 1; j < string.length; j++) {
   if (string.charAt([i]) === string.charAt([j])) { 
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
