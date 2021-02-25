// accept a string and return whether it a palindrome or not

function isPalindrome(str) {
  if (str.length <= 1) {
    return true;
  }
  return str[0] !== str[str.length - 1]
    ? false
    : isPalindrome(str.substring(1, str.length - 1));
}

// TESTCASES
console.log(isPalindrome("awesome")); // expected: false
console.log(isPalindrome("foobar")); // expected: false
console.log(isPalindrome("tacocat")); // expected: true
console.log(isPalindrome("amanaplanacanalpanama")); // expected: true
console.log(isPalindrome("amanaplanacanalpandemonium")); // expected: false
