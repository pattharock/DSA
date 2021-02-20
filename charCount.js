function charCount(str) {
  // do something
  // return the case-insensitive count of all alphanumeric characters in the string.
  // keys -> alphanumeric characters; values -> respective counts

  // SIMPLIFIED FURTHER

  // a) make object to return at the end
  // b) loop over entire string and increment the count of that alphaumeric character
  //   b) i)   if the lowercase(char) is in the object, incremennt the count by 1
  //   b) ii)  if the lowercase(char) is NOT in the object, add it and set the count to 1
  //   b) iii) if the lowercase(char) is NOT alphanumeric (space, period etc)  ==> SKIP IT
  // c) return the same object at the end

  var result = {};
  var string = str.toLowerCase();
  for (var c of string) {
    // since regex can cause performance issues especially in chrome, it is probably a good idea to use ASCII codes instead since boolean comaprisons are always faster. Thus wrote an impleentation of isAlnum

    // let pattern = new RegExp("[a-z0-9]");
    // if (pattern.test(c)) {
    if( isAlnum(c)) {
      result[c] ? result[c]++ : (result[c] = 1);
    }
  }
  return result;
}

function isAlnum(c){
  let cc = c.charCodeAt(0)
  return (cc > 47 && cc < 58) || (cc > 64 && cc < 91) || (cc > 96 && cc < 123)
}

// since regex can cause performance issues especially in chrome, it is probably a good idea to use ASCII codes instead

console.log(charCount("aaaa")); // expected {'a': 4}
console.log(charCount("abcd")); // expected {'a': 1, 'b': 1, 'c': 1, 'd': 1}
console.log(charCount("AaBbCcDd")); // expected {'a': 2, 'b': 2, 'c': 2, 'd': 2}
console.log(charCount("AaBbCcDd!!!!!!")); // expected {'a': 2, 'b': 2, 'c': 2, 'd': 2}
console.log(charCount("    ")); // expected {}
console.log(charCount("Hello hi!")); //expected {'h': 2, 'e': 1, 'l': 2, 'o': 1, 'i': 1 }
