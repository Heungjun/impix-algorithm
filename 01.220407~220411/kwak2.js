const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

let input = fs.readFileSync(filePath).toString().split("\r\n");
console.log(input);

let arr=[];
for (let i = 0; i < input.length; i++) {
    if(isNaN(input[i])){
        arr.push(input[i])
    }
}
    console.log(arr)