// accept an array and return the product of all the elements in the array.

// Using pure recursion : O(n)
function productOfArray(arr) {
  return arr.length === 0 ? 1 : arr[0] * productOfArray(arr.slice(1));
  // if (arr.length === 0) {
  //   return 1;
  // } else {
  //   return arr[0] * productOfArray(arr.slice(1));
  // }
}

// Using Helper method recursion : O(n)
function productOfArray(arr) {
  let prod = 1;

  function helper(arr) {
    if (arr.length === 0) {
      return 1;
    } else {
      prod *= arr[0];
    }
    helper(arr.slice(1));
  }

  helper(arr);

  return prod;
}

// TESTCASES
console.log(productOfArray([])); // expected: 1
console.log(productOfArray([1, 2, 3, 4, 5])); // expected: 120
console.log(productOfArray([1, 2, 3, 4, 5, 6])); // expected: 720
console.log(productOfArray([1, 2, 3])); // expected: 6
console.log(productOfArray([1, 2, 3, 10])); // expected: 60
