// return the sum of all even numbers in an object, which may conatiain nested objects.

// defining an isObject function
function isObject(obj) {
  return (
    (typeof obj === "object" && typeof obj !== null) ||
    typeof obj === "function"
  );
}

function nestedEvenSum(obj) {
  let sum = 0;

  function helper(helperInput) {
    for (let key in helperInput) {
      if (isObject(helperInput[key])) {
        helper(helperInput[key]);
      } else {
        if (Number.isInteger(helperInput[key]) && helperInput[key] % 2 === 0) {
          sum += helperInput[key];
        }
      }
    }
  }

  helper(obj);

  return sum;
}

// TEST CASES
var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup",
    },
  },
};

var obj2 = {
  a: 2,
  b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
  c: { c: { c: 2 }, cc: "ball", ccc: 5 },
  d: 1,
  e: { e: { e: 2 }, ee: "car" },
};

console.log(nestedEvenSum(obj1)); // expected: 6
console.log(nestedEvenSum(obj2)); // expected: 10
