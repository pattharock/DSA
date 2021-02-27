// accept 2 strings, return the count of how many times the second occurs inside the first.

function naiveStringSearch(str1, str2) {
  let i1 = 0;
  let i2 = 0;
  let count = 0;
  while (i1 < str1.length - str2.length + 1) {
    let len = 0;
    while (len < str2.length) {
      if (str1[i1 + len] !== str2[i2 + len]) {
        break;
      } else {
        len++;
      }
    }
    if (len === str2.length) {
      count++;
    }
    i1++;
  }
  return count;
}

// TESTCASES
console.log(naiveStringSearch("wowomgzomg", "omg")); // expected: 2
console.log(naiveStringSearch("lorie loled", "lol")); // expected: 1
console.log(naiveStringSearch("AABAACAADAABAABA", "AABA")); // expected: 3
