// accept a base and an exponentm return the base power the exponent. Disregard negative values

// O(n) pure recursion
function power(base, exponent) {
  return exponent === 0 ? 1 : base * power(base, --exponent);
}

// TESTCASES
console.log(power(2, 0)); //expected: 1
console.log(power(2, 2)); //expected: 4
console.log(power(2, 4)); //expected: 16
