// given 2 sorted arrays, write a functioon to merge them into a sorted array.

// O(N + M) time
function merge(arr1, arr2) {
  let mergedArr = [];
  let ind1 = 0;
  let ind2 = 0;
  while (ind1 < arr1.length || ind2 < arr2.length) {
    if (arr1[ind1] < arr2[ind2]) {
      mergedArr.push(arr1[ind1++]);
    } else {
      mergedArr.push(arr2[ind2++]);
    }
  }
  return mergedArr;
}

// TESTCASES
console.log(merge([1, 10, 50], [2, 14, 99, 100])); // Expected: [1, 2, 10, 14, 50, 99, 100]

