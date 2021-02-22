// given an array of integers and a number, find the maximum sum of a subarray (i.e. consecutive elements) of the passed in length.


// O(N) time & O(1) space
function maxSubarraySum(arr, n) {
  if (n > arr.length) {
    return null;
  }

  let maxSum = 0;
  let tempSum = 0;

  for (let i = 0; i < n; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let j = n; j < arr.length; j++) {
    tempSum = tempSum - arr[j - n] + arr[j];
    if (tempSum > maxSum) {
      maxSum = tempSum;
    }
  }
  return maxSum;
}

// TESTCASES
console.log(maxSubarraySum([100, 200, 300, 400], 2)); // expected: 700
console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)); // expected: 39
console.log(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2)); // expected: 5
console.log(maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2)); // expected: 5
console.log(maxSubarraySum([2, 3], 3)); // expected: null
