// take an object as input and convert all the numbers in the object to strings;

// defining an isObject function
function isObject(obj) {
  return (
    (typeof obj === "object" && typeof obj !== null) ||
    typeof obj === "function"
  );
}

function stringifyNumbers(obj) {
  let retVal = Object.assign({}, obj);

  function helper(helperInput) {
    for (let key in helperInput) {
      if (isObject(helperInput[key])) {
        helper(helperInput[key]);
      }
      if (Number.isInteger(helperInput[key])) {
        helperInput[key] += "";
      }
    }
  }

  helper(retVal);
  return retVal;
}

// TESTCASES
let obj = {
  num: 1,
  test: [1, 3, 4],
  data: {
    val: 4,
    info: {
      isRight: true,
      random: 66,
    },
  },
};
console.log(stringifyNumbers(obj));
