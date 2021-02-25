// accept an object and return an array of all the strings present in the object

function isObject(obj) {
  return (
    (typeof obj === "object" && typeof obj !== null) ||
    typeof obj === "function"
  );
}

function collectStrings(obj) {
  let retArr = [];

  function helper(helperInput) {
    for (let key in helperInput) {
      if (isObject(helperInput[key])) {
        helper(helperInput[key]);
      } else {
        if (typeof helperInput[key] === "string") {
          retArr.push(helperInput[key]);
        }
      }
    }
  }

  helper(obj);
  return retArr;
}

// TESTCASES
const obj = {
  stuff: "foo",
  data: {
    val: {
      thing: {
        info: "bar",
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: "baz",
          },
        },
      },
    },
  },
};
console.log(collectStrings(obj)); // expected: ["foo", "bar", "baz"]
