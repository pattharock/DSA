// accept a string and return the length of the longest substring with all distinct characters

function findLongestSubstring(str) {
  let longest = 0;
  let seen = {};
  let start = 0;
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (seen[char]) {
      start = Math.max(start, seen[char]);
    }
    longest = Math.max(longest, i - start + 1);
    seen[char] = i + 1;
  }
  return longest;
}

// TESTCASES
console.log(findLongestSubstring("")); // exptected: 0
console.log(findLongestSubstring("rithmschool")); // exptected: 7
console.log(findLongestSubstring("thisisawesome")); // exptected: 6
console.log(findLongestSubstring("thecatinthehat")); // exptected: 7
console.log(findLongestSubstring("bbbbbb")); // exptected: 1
console.log(findLongestSubstring("longestsubstring")); // exptected: 8
console.log(findLongestSubstring("tishishowwedoit")); // exptected: 6
