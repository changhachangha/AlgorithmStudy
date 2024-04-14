/* eslint-disable */
const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

//입력 개수 제거
input.shift();
//입력받은 값의 배열 1차원배열로
const arr = input.map((v) => v.split(' ').map((v) => +v)).flat();
//dp배열 생성 최초의값은 arr배열의 첫번째 요소
const dp = [arr[0]];
//최대값 변수
let max = arr[0];
//arr 배열 순회
for (let i = 1; i < arr.length; i++) {
  //dp배열은 현재 arr값과 그전까지의 값중 더큰값
  dp[i] = Math.max(arr[i], dp[i - 1] + arr[i]);
  //최대값 비교
  max = Math.max(dp[i], max);
}

console.log(max);
