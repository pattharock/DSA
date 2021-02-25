// accept a SORTED array and a values, and return the index of the value in the array, -1 ohterwise.

function binarySearch(arr, val) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (val > arr[mid]) {
      start = mid + 1;
    } else if (val < arr[mid]) {
      end = mid - 1;
    } else {
      return mid;
    }
  }
  return -1;
}

// TESTCASES
console.log(binarySearch([1, 2, 3, 4, 5], 2)); // expected: 1
console.log(binarySearch([1, 2, 3, 4, 5], 3)); // expected: 2
console.log(binarySearch([1, 2, 3, 4, 5], 5)); // expected: 4
console.log(binarySearch([1, 2, 3, 4, 5], 6)); // expected: -1
console.log(
  binarySearch(
    [
      5,
      6,
      10,
      13,
      14,
      18,
      30,
      34,
      35,
      37,
      40,
      44,
      64,
      79,
      84,
      86,
      95,
      96,
      98,
      99,
    ],
    10
  )
); // expected: 2
console.log(
  binarySearch(
    [
      5,
      6,
      10,
      13,
      14,
      18,
      30,
      34,
      35,
      37,
      40,
      44,
      64,
      79,
      84,
      86,
      95,
      96,
      98,
      99,
    ],
    95
  )
); // expected: 16
console.log(
  binarySearch(
    [
      5,
      6,
      10,
      13,
      14,
      18,
      30,
      34,
      35,
      37,
      40,
      44,
      64,
      79,
      84,
      86,
      95,
      96,
      98,
      99,
    ],
    100
  )
); // expected: -1
