// Given a number, count down from that number till 1.

// O(n) time
function countDown(num) {
  if (num == 0) {
    console.log("All Done");
    return;
  }
  console.log(num);
  countDown(--num);
}

// TESTCASES
countDown(10);
// Expected:
// 10
// 9
// 8
// 7
// 6
// 5
// 4
// 3
// 2
// 1
// All Done
