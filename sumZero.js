// take an array of sorted integers as input, and return the first set of elements that sum to zero. If they exsit return and array containing both.
// else return undefined.

// GIVEN
// a) Array contains only INTEGERS
// b) Array is ALWAYS SORTED (i.e. we can assume that the array is sorted)

// NAIVE SOLUTIOM : O(N^2) time algorrithm using nested loops and all pairwise comparison.

// function sumZero(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] + arr[j] === 0) {
//         return [arr[i], arr[j]];
//       }
//     }
//   }
//   return undefined;
// }

function sumZero(arr) {
  // Since the array is sorted, we can use the double ponters approach to gradually increment/decrement each, based on
  // comparison with the target number.

  // STEPS
  // start = 0, end = len-1, sum = arr[start] + arr[end]
  // while(start > end)
  // if SUM === TARGET
  //  return [arr[start], arr[end]]
  // else if SUM > TARGET
  //  end--
  // else
  // start ++
  // endwhile
  // return undefined

  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    let sum = arr[start] + arr[end];
    if (sum === 0) {
      return [arr[start], arr[end]];
    } else if (sum > 0) {
      end--;
    } else {
      start++;
    }
  }
  // explicitly dont need to return undfined, since is the default behaviour in the case that a return value is not specified.
  // return undefined;
}

// TEST CASES
console.log(sumZero([-3, -2, -1, 0, 1, 2, 3])); // expected: [-3, 3]
console.log(sumZero([-2, 0, 1, 3])); // expected: undefined
console.log(sumZero([1, 2, 3])); // expected: undefined
