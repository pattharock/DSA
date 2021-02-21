// given a SORTED array of integers and a target average, determine if there is a target pair with the givenn average values, if any.


// O(n) time & O(1) space
function averagePair(arr, n) {
  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    let target = 2 * n;
    let sum = arr[start] + arr[end];
    if (sum > target) {
      end--;
    } else if (sum < target) {
      start++;
    } else {
      return true;
    }
  }
  return false;
}

// TEST CASES
console.log(averagePair([1, 2, 3], 2.5)); // expected: true
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)); // expected: true
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1)); // expected: false
console.log(averagePair([], 4)); // expected: false
