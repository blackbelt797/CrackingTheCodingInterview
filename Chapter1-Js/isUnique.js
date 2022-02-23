// Chapter 1
// 1.1 Example is UniqueImplement an algorithm to determine if a string has all unique characters. What if you cannot use additional data structures.

// Your current approach is checking the same string so it will always return false.
// Set the initial value of j to i + 1;
// also, you need to check against the characters. This method iterates through "Gregg" and not "G", "r", "e" etc.
// use string.charAt(index)

//string.charAt(index) is a string Object's charAt() method returns a new string consisting of the single UTF-16 code unit at the specified offset into the string.

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
//my name has two of the same letters at the end therefor it will be flase. But if I spell it with only 1 g at the end it will be true
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

// Chapter 1
// Ex: 1.2 Check Permutation: Given two string, write a method to decide if one is a permutation of the other.
/* Summary of what to be thinking about. 
   - Is the permutation case sensitive? 
   - Is white space significant?
   - Observe that strings that are differnt length cant be permutations of each other. 

*/

let checkPermutation = function (stringOne, stringTwo) {
 // If string lengths don't math return false
 if (stringOne.length !== stringTwo.length) {
  return false;
  // else sort and compare
  // Now I need the conditions that will check each string against one another
  // The split() method divides a String into an ordered list of substrings, puts these substrings into
  // an array, returns the array. The division is done by searching for a pattern; where the pattern is provided as the first parameter in the method's call.
 } else {
  let sortedStringOne = stringOne.split('').sort().join(''); // Okay so the split method is seperating each letter into an arry then with the .sort() method sorts the elements in the array ` in place ` then with adding .join() method creates an returns a new string by concatenating all the elements with a specified spearator string. In this case the empty string and in acending order. Then the join method will rejoin the array back into a string?
  let sortedStringTwo = stringTwo.split('').sort().join('');
  //The split allows you to isolate each letter as an index then you sort each one then rejoin it back together.

  return sortedStringOne === sortedStringTwo;
 }
};

// Tests

console.log(checkPermutation('aba', 'aab'));
// Oh!! So the split() method will split the string into an array of each letter. The sort() will organize/rearange the code into accending order this is how we can check if it is a permutation from string1 to string2.Then you just rejoin the array back into a string.
console.log(checkPermutation('cat', 'tac'));
