// implement the selection sort algotrihtm on Integer arrays

// O(N^2) time
// marginally better than bubble sort since bubble sort keeps on swapping in every comparison, however insertion sort, makes only single swap per iteration of the outer loop.
function selectionSort(arr) {
  let start = 0;
  while (start < arr.length) {
    let smallestIndex = -1;
    let smallest = Infinity;
    for (let j = start + 1; j < arr.length; j++) {
      if (arr[j] <= smallest) {
        smallest = arr[j];
        smallestIndex = j;
      }
    }
    let temp = arr[start];
    arr[start] = arr[smallestIndex];
    arr[smallestIndex] = temp;
    start++;
  }
  return arr;
}

// TESTCASES
console.log(selectionSort([34, 22, 10, 19, 17])); //expected: [10, 17, 19, 22, 34]
console.log(selectionSort([5, 4, 3, 2, 1])); //expected: [1, 2, 3, 4, 5]
