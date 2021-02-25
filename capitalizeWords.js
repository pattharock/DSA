// given an array of strings, capitalize each string in the array.

function capitalizeWord(str) {
  if (str.length === 0) {
    return "";
  } else {
    return str
      .charAt(0)
      .toUpperCase()
      .concat(capitalizeWord(str.slice(1)));
  }
}

function capitalizeWords(arr) {
  let retStr = [];
  function helper(helperInput) {
    if (helperInput.length === 0) {
      return;
    } else {
      retStr.push(capitalizeWord(helperInput[0]));
      helper(helperInput.slice(1));
    }
  }
  helper(arr);
  return retStr;
}

//TESTCASES
// console.log(capitalizeWord("learning"));
console.log(capitalizeWords(['i', 'am', 'learning', 'recursion'])); // expected : ['I', 'AM', 'LEARNING', 'RECURSION']
