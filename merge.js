// given 2 sorted arrays, write a functioon to merge them into a sorted array.

// O(N + M) time
function merge(arr1, arr2) {
  let results = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    results.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    results.push(arr2[j]);
    j++;
  }
  return results;
}

// TESTCASES
console.log(merge([1, 10, 50], [2, 14, 99, 100])); // Expected: [1, 2, 10, 14, 50, 99, 100]
console.log(merge([1, 3, 5, 7], [2, 4, 6, 8])); // Expected: [1, 2, 3, 4, 5, 6, 7, 8]
console.log(merge([], [2, 4, 6, 8])); // Expected: [2, 4, 6, 8]
