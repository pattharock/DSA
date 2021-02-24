// given a number, iteratively compute the factorial of that number

function iterativeFactorial(num) {
  if (num < 0) {
    return -1;
  }

  let product = 1;
  for (let i = 1; i <= num; i++) {
    product *= i;
  }
  return product;
}

// TESTCASES
console.log(iterativeFactorial(0)); // expected: 1
console.log(iterativeFactorial(1)); // expected: 1
console.log(iterativeFactorial(4)); // expected: 24
