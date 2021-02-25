// given an array of strings, recursively capitalize the first letter of each string.

// helper method recursion : O(n)
function capitalizeFirst(arr) {
  let retArr = [];

  function helper(helperInput) {
    if (helperInput.length === 0) {
      return [];
    } else {
      retArr.push(
        helperInput[0].charAt(0).toUpperCase() + helperInput[0].slice(1)
      );
      return helper(helperInput.slice(1));
    }
  }

  helper(arr);

  return retArr;
}

// TESTCASES
console.log(capitalizeFirst(["car", "taco", "banana"])); // expected: ['Car','Taco','Banana']
