const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  
const N = +input.shift();
const alpabetArr = [...new Set(input.map(v=>v.replaceAll('\r','')))];



console.log(alpabetArr.sort((a,b)=>a.length - b.length).sort((a,b)=>{
    if(a.length == b.length) return a.localeCompare(b)
}).join('\n'))


