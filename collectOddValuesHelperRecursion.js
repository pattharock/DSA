// given an array, declare a recursive function to return all the odd values in the array. Use helper method recursion

// O(n) solution using HELPER METHOD RECURSION
function collectOddValuesHelperRecursion(arr) {
  let result = [];

  function helper(helperInput) {
    if (helperInput.length === 0) {
      return;
    }

    if (helperInput[0] % 2 === 1) {
      result.push(helperInput[0]);
    }
    helper(helperInput.slice(1));
  }

  helper(arr);

  return result;
}

// TESTCASES
console.log(collectOddValuesHelperRecursion([1, 2, 3, 4, 5, 6, 7, 8, 9])); // expected : [1, 3, 5 7, 8]
