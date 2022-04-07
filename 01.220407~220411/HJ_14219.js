let fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let input = fs.readFileSync("./testCase_14219.txt").toString().split("\n");
let [n, m] = input[0].split(" ");
console.log((n * m) % 3 == 0 ? "YES" : "NO");
