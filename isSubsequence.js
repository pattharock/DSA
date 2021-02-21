// accept two strings and check whether the first is a valid subsequence of the other i.e. characters in the first string, ooccur in the second string, without their order changing.

// O(n+m) time & O(1) space
function isSubsequence(str1, str2) {
  let i = 0;
  let j = 0;
  while (j < str2.length) {
    if (str1[i] === str2[j]) {
      i++;
      j++;
    } else {
      j++;
    }
  }
  return i === str1.length;
}

// TESTCASES
console.log(isSubsequence("hello", "hello world")); // expected: true
console.log(isSubsequence("sing", "sting")); // expected: true
console.log(isSubsequence("abc", "abracadabra")); // expected: true
console.log(isSubsequence("abc", "acb")); // expected: false
