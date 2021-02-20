// Function which takes 2 arrays as input and returns true only if the square of every value in the first array exists in the second array.

// This is the O(N^2) time approach to solving the problem.
// ================ NESTED FOR LOOP APPROACH ==============

// function same(arr1, arr2) {
//   if (arr1.length !== arr2.length) {
//     return false;
//   } else {
//     for (var num of arr1) {
//       let foundIndex = arr2.indexOf(num * num);
//       if (foundIndex === -1) {
//         return false;
//       }
//       arr2.splice(foundIndex, 1);
//     }
//     return true;
//   }
// }

// This is the O(N) time approach to solving the problem.
// ============== FREQUENCY COUNTER APPROACH ============
function same(arr1, arr2) {
  // count the frequecy of each numbet in each array respectively.
  let fc1 = {};
  let fc2 = {};

  for (let num1 of arr1) {
    fc1[num1] ? fc1[num1]++ : (fc1[num1] = 1);
  }

  for (let num2 of arr2) {
    fc2[num2] ? fc2[num2]++ : (fc2[num2] = 1);
  }

  // carry out comparison in both objects to check whether the key exists, and
  // if it does, is the value of one, the sqare of the value of 2

  for (let key1 in fc1) {
    if (!fc2[key1 ** 2] || fc1[key1] !== fc2[key1 ** 2]) {
      return false;
    }  
  }
  return true;
}

console.log(same([2, 1, 3], [4, 1, 9])); // expected value : true
console.log(same([1, 2, 3], [1, 9])); // expected value : false <=> every element in arr1 mus have it's  square in arr2
console.log(same([1, 2, 1], [4, 4, 1])); // expected value : false <=> The frequency of occurance must be exactly same
