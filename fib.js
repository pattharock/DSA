// take an input n, and return the nth fibonacci number

function fib(n) {
  return n === 1 || n === 2 ? 1 : fib(n - 1) + fib(n - 2);
}

// TESTCASES
console.log(fib(4)); //expected: 3
console.log(fib(10)); //expected: 55
console.log(fib(28)); //expected: 317811
console.log(fib(35)); //expected: 9227465
