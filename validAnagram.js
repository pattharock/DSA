// given 2 strings, write a function to determine whether the secoond string is an anagram of the first string
// anagram -> word formed by rearranging all of the letters in the given word.


// GIVEN 

// 1. All inputs are single words, i.e. there will be NO SPACES.
// 2. Uppercase & Lowercase are considered the same i.e. COMPARISON IS CASE INSENSITIVE
// 3. Only alphabetical inputs are considered i.e. NO SPECIAL CHARACTERS, NUMBERS
function validAnagram(str1, str2){
  //  if we count the frequency of each letter, and compare the objects, their respective counts will be equal.
  
  var fc1 = {}
  var fc2 = {}

  for(var c1 of str1){
    var cc = c1.toLowerCase()
    fc1[cc] ? fc1[cc]++ : fc1[cc] = 1;
  }

  for(var c2 of str2){
    var cc = c2.toLowerCase()
    fc2[cc] ? fc2[cc]++ : fc2[cc] = 1;
  }

  for (var key in fc1){
    if (!(fc2[key]) || (fc1[key] !== fc2[key])){
      return false
    }
  }
  return true

}

// O(N) time and O(N) space

// TEST-CASES
console.log(validAnagram('', '')) // expected : true
console.log(validAnagram('aaz', 'zza')) // expected : false
console.log(validAnagram('anagram', 'nagaram')) // expected : true
console.log(validAnagram('rat', 'car')) // expected : false
console.log(validAnagram('awesome', 'awesom')) // expected : false
console.log(validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana')) // expected : false
console.log(validAnagram('qwerty', 'qeywrt')) // expected : true
console.log(validAnagram('texttwisttime', 'timetwisttext')) // expected : true


