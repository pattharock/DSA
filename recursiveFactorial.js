// given a number, recursively compute the factorial of that number

// O(n)
function recursiveFactorial(num) {
  if (num < 0) {
    return -1;
  } else if (num === 0) {
    return 1;
  } else {
    return num * recursiveFactorial(--num);
  }
}

// TESTCASES
console.log(recursiveFactorial(0)); // expected: 1
console.log(recursiveFactorial(1)); // expected: 1
console.log(recursiveFactorial(4)); // expected: 24
