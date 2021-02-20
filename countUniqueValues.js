// take a sorted array as input and return the count of the unique values in the array.
// input : sorted array of integers eg. [1, 1, 1, 1, 1, 2]
// output : unqiue_count i.e. integer eg. 2

//  GIVEN
// a) Array ONLY CONSISTS OF INTEGERS
// b) Array CAN CONTAIN NEGATIVE NUMBERS AS WELL
// c) Array is ALWAYS SORTED (i.e. we can assume that the input is always sorted)

function countUniqueValues(arr) {
  var i = 0;
  var count = 0;
  while (i < arr.length) {
    while (i < arr.length - 1 && arr[i] === arr[i + 1]) {
      i++;
    }
    count++;
    i++;
  }
  return count;
}

// TEST CASES
console.log(countUniqueValues([1, 1, 1, 1, 1, 2])); // expected: 2
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])); // expected: 7
console.log(countUniqueValues([])); // expected: 0
console.log(countUniqueValues([-2, -1, -1, 0, 1])); // expected: 4
