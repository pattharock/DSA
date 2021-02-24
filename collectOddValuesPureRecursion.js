// given an array, declare a recursive function to return all the odd values in the array. Use pure recursion
function collectOddValuesHelperRecursion(arr) {
  let retArr = [];

  if (arr.length === 0) {
    return retArr;
  }

  if (arr[0] % 2 === 1) {
    retArr.push(arr[0]);
  }

  return retArr.concat(collectOddValuesHelperRecursion(arr.slice(1)));
}

// TESTCASES
console.log(collectOddValuesHelperRecursion([1, 2, 3, 4, 5, 6, 7, 8, 9])); // expected : [1, 3, 5 7, 8]
console.log(collectOddValuesHelperRecursion([1, 2, 3, 4, 5])); // expected : [1, 3, 5]
