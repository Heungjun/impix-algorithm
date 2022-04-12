const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

let input = fs.readFileSync(filePath).toString().split("\r\n");
console.log(input);

// input 을 전쳉를돌리는데 0번째꺼는빼고 1번째부터돌리는데 숫자가나오면 숫자만큼의 배열을 도는데 
// 한행마다 0보다큰 최대 큰 숫자를 꺼내고 그걸 다더한뒤 출력, 다음 숫자만큼 동일하게 시작
let inputLength = input.length;
console.log(inputLength)
// console.log(input[0])
// console.log(input.slice(2, 6))
// console.log(input.slice(7, 10))
// console.log(input)
let arr = [];
let nums = [];
for (let i = 0; i < inputLength; i++) {
    if (Number(input[i])) {
        // console.log(input[i])
        nums.push(input[i])
    } else {
        arr.push(input[i])
    }
}

console.log('nums=', nums)
console.log('arr=', arr)

let j = 1;
let k = 0;
for (let i = 0; i < nums[0]; i++) {
    console.log('for문!')
    console.log('i=', i)
    console.log('j=', j);
    console.log('k=', k);
    


    let q = arr.slice(i, nums[j]);
    let length = q.length;
    // console.log('length=',  length);
    k = length + nums[2];
    if (i != nums[0]) {
        console.log('여기 i=', i)
        console.log(arr.slice(length, k)) // 4 _ 7
    }
}

// console.log(arr.slice(0, 4))
// console.log(arr.slice(0, 4))
// console.log(arr.slice(4, 7))
// for (let i = 0; i < nums.length; i++) {
//     console.log(nums[i])
// }



// let arr = [];
// let sub = [];
// for (let i = 0; i < input.length; i++) {
//     if (Number(input[i])) {
//         arr.push(input[i])
//     } else {
//         sub.push(input[i])
//     }
// }
// console.log('arr=', arr)
// console.log('sub=', sub)