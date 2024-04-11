/* eslint-disable */
const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

const N = +input;

const dp = [];

dp[1] = 1;
dp[2] = 2;

for (let i = 3; i <= N; i++) {
  dp[i] = (dp[i - 2] + dp[i - 1]) % 15746;
}

console.log(dp[N]);
