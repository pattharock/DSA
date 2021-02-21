// accept a vairable number of arguments and return if there are any duplicates in the arguments.
// ASSUMPTIONS :-
// a) All the arguments have the same datatype

// O(nlogn) time since sorting & O(1) space
// function areThereDuplicates() {
//   let args = Array.from(arguments).sort();
//   for (let i = 0; i < args.length - 1; i++) {
//     if (args[i] === args[i + 1]) {
//       return true;
//     }
//   }
//   return false;
// }

// O(n) time and space
function areThereDuplicates() {
  let freq = {};
  let args = Array.from(arguments);
  for (let arg of args) {
    freq[arg] ? freq[arg]++ : (freq[arg] = 1);
  }
  for (let arg in freq) {
    if (freq[arg] > 1) {
      return true;
    }
  }
  return false;
}

// TESTCASES
console.log(areThereDuplicates(1, 2, 3)); // expected: false
console.log(areThereDuplicates(1, 2, 2)); // expected: true
console.log(areThereDuplicates("a", "b", "c", "a")); // expected: true
