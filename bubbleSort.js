// implementation of the bubble sort algortihm


// O(n^2) average time, however in the case of nearly sorted data, the algorithm performs almost linearly. 
function bubbleSort(arr) {
  var noSwaps;
  for (let i = arr.length - 1; i >= 0; i--) {
    noSwaps = true;
    for (let j = 0; j < i; j++) {
      if (arr[j + 1] < arr[j]) {
        let temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
        noSwaps = false;
      }
    }
    if (noSwaps) {
      break;
    }
  }
  return arr;
}

// TESTCASES
console.log(bubbleSort([5, 4, 3, 2, 1])); // expected: [1, 2, 3, 4, 5]
console.log(bubbleSort([37, 45, 29, 8, 12, 88, -3])); // expected: [1, 2, 3, 4, 5]
