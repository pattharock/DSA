// accept a string and return the reverse of the string

// helper method recursion : O(n)
function reverseString(str) {
  let retStr = "";

  function helper(helperInput) {
    if (helperInput.length === 0) {
      return "";
    } else {
      retStr += helperInput[helperInput.length - 1];
      helper(helperInput.slice(0, -1));
    }
  }

  helper(str);
  return retStr;
}

// TESTCASES
console.log(reverseString("abcde")); //expected : edbca
console.log(reverseString("awesome")); // 'emosewa'
console.log(reverseString("rithmschool")); // 'loohcsmhtir'
