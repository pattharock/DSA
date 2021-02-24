// accept a number and return the sum of all numbers from 0 to that number;

// Helper method recursion : O(n)
function recursiveRange(num) {
  let sum = 0;

  function helper(n) {
    if (n === 0) {
      return 0;
    }
    sum += n;
    helper(n - 1);
  }

  helper(num);

  return sum;
}

// TESTCASES
console.log(recursiveRange(6)); //expected: 21
console.log(recursiveRange(10)); //expected: 55
