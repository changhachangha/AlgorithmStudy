const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  
const N = +input.shift();
const intArr = input.map(v=>[...new Set(v.split(' ').map(v=>+v))]).flat()
console.log(intArr.sort((a,b) => a-b).join(' '))
