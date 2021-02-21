// given 2 positive integers, find out if the two numbers have the same frequency of digits.

function sameFrequency(num1, num2) {
  // let nums1 = [];
  // while (num1 % 10 >= 1) {
  //   num1 /= 10;
  //   nums1.push(Math.floor(num1 % 10));
  // }
  // console.log(nums1);
  let freq = {};
  let nums1 = num1.toString();
  let nums2 = num2.toString();
  for (let c1 of nums1) {
    freq[c1] ? freq[c1]++ : (freq[c1] = 1);
  }
  for (let c2 of nums2) {
    if (!freq[c2]) {
      return false;
    } else {
      freq[c2]--;
    }
  }
  return true;
}

// TESTCASES
console.log(sameFrequency(182, 281)); // expected: true
console.log(sameFrequency(34, 14)); // expected: false
console.log(sameFrequency(3589578, 5879385)); // expected: true
console.log(sameFrequency(22, 222)); // expected: false

// console.log(sameFrequency(1223334444, 1223334444));
