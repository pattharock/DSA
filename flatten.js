// accept an array of arrays and return a new array with all values flattened

function flatten(arr) {
  let retArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      retArr = retArr.concat(flatten(arr[i]));
    } else {
      retArr.push(arr[i]);
    }
  }
  return retArr;
}

// TESTCASES
console.log(flatten([1, 2, 3, [4, 5]])); // expected: [1, 2, 3, 4, 5]
console.log(flatten([1, [2, [3, 4], [[5]]]])); // expected: [1, 2, 3, 4, 5]
console.log(flatten([[1], [2], [3]])); // expected: [1,2,3]
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])); // expected: [1,2,3]
