// given a positive integer, compute the sum of all integers from 1 to that number

// O(n)
function sumRange(num) {
  if (num === 1) {
    return 1;
  } else {
    return num + sumRange(--num);
  }
}

// TESTCASES
console.log(sumRange(10)); // expected: 55
