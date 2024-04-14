/* eslint-disable */
const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

input.shift();

const nArr = input.map((v) => +v);

const dp = [];

dp[1] = 1;
dp[2] = 1;
dp[3] = 1;
dp[4] = 2;
dp[5] = 2;
dp[6] = 3;

const max = Math.max(...nArr);

for (let i = 7; i <= max; i++) {
  dp[i] = dp[i - 2] + dp[i - 3];
}

console.log(nArr.map((v) => dp[v]).join('\n'));
