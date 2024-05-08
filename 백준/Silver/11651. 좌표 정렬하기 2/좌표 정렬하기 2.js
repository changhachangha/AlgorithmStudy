const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  
const N = +input.shift();
const xyPoint = input.map(v=>v.replaceAll('\r','')).map(v=>v.split(' '))


const xySortPoint = xyPoint.sort((a,b)=> Number(a[1]) - Number(b[1])).sort((a,b)=>{
  if(a[1] === b[1]) return a[0] - b[0]
})

console.log(xySortPoint.map(v=>v.join(' ')).join('\n'))


 