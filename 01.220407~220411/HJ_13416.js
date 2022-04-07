let fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let input = fs.readFileSync("./testCase_13416.txt").toString().split("\n");

let iter = 0;
let T = input[iter++];
let N = 0;
let numbers = []; // [A, B, C]
let answer = 0;

function getAnswer() {
  N = input[iter++];
  answer = 0;

  while (N--) {
    numbers = [...input[iter].split(" "), 0];
    answer += Math.max(...numbers);
    iter++;
  }

  console.log(answer);
}

for (let i = 0; i < T; i++) {
  getAnswer();
}
