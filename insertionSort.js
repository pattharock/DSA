// implement the insertion sort algorithm on Integer Arrays

// O(N^2) but performs really well when the data is nearly sorted. 
// insertion sort can be considered an "online algorithm"
// "online algorothm": In computer science, an online algorithm is one that can process its input piece-by-piece in a serial fashion, i.e., in the order 
//  that the input is fed to the algorithm, without having the entire input available from the start.
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let elem = arr[i];
    for (j = i - 1; j >= 0 && arr[j] > elem; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = elem;
  }
  return arr;
}

// TESTCASES
console.log(insertionSort([2, 1, 9, 76, 4])); // expected: [1, 2, 4, 9, 76]
console.log(insertionSort([5, 4, 3, 2, 1])); // expected: [1, 2, 3, 4, 5]
