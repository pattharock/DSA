// given 2 strings, write a function to determine whether the secoond string is an anagram of the first string
// anagram -> word formed by rearranging all of the letters in the given word.

// GIVEN

// 1. All inputs are single words, i.e. there will be NO SPACES.
// 2. Uppercase & Lowercase are considered the same i.e. COMPARISON IS CASE INSENSITIVE
// 3. Onyl alpohabetical inputs are considered i.e. NO SPECIAL CHARACTERS, NUMBERS
// function validAnagram(str1, str2){
//   //  if we count the frequency of each letter, and compare the objects, their respective counts will be equal.

//   var fc1 = {}
//   var fc2 = {}

//   for(var c1 of str1){
//     var cc = c1.toLowerCase()
//     fc1[cc] ? fc1[cc]++ : fc1[cc] = 1;
//   }

//   for(var c2 of str2){
//     var cc = c2.toLowerCase()
//     fc2[cc] ? fc2[cc]++ : fc2[cc] = 1;
//   }

//   for (var key in fc1){
//     if (!(fc2[key]) || (fc1[key] !== fc2[key])){
//       return false
//     }
//   }
//   return true

// }

// O(N) time and O(N) space

// IMPROVEMENTS 

// the current approach can be improved in 2 ways

// a) comapre the length of the 2 strings firstly. it will filter out many of the cases in the beginning itself
// b) instead of creating 2 different frequency counter objects, we can use one itslef, and use key value lookup as well as subtraction on it to find each letter
// This would directly reduce the space-time utilised by a constant factor, however complexity remains unchanged => O(N)

function validAnagram(str1, str2) {
  if(str1.length !== str2.length){
    return false;
  } 
  var dict = {};
  for (var c1 of str1) {
    var cc1 = c1.toLowerCase();
    dict[cc1] ? dict[cc1]++ : (dict[cc1] = 1);
  }
  for (var c2 of str2) {
    var cc2 = c2.toLowerCase();
    //  if ket cc2 doesnt exist or value at given key is falsy(i.e. 0), returns false
    if (!dict[cc2]) {
      return false;
    } else {
      // reduce count 
      dict[cc2]--;
    }
  }
  return true;
}

// TEST-CASES
console.log(validAnagram("", "")); // expected : true
console.log(validAnagram("aaz", "zza")); // expected : false
console.log(validAnagram("anagram", "nagaram")); // expected : true
console.log(validAnagram("rat", "car")); // expected : false
console.log(validAnagram("awesome", "awesom")); // expected : false
console.log(validAnagram("amanaplanacanalpanama", "acanalmanplanpamana")); // expected : false
console.log(validAnagram("qwerty", "qeywrt")); // expected : true
console.log(validAnagram("texttwisttime", "timetwisttext")); // expected : true