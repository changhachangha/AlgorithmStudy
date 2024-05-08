const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  
const N = +input.shift();
const xyPoint = input.map(v=>v.replaceAll('\r','')).map(v=>v.split(' '))


const xySortPoint = xyPoint.sort((a,b)=> Number(a[0]) - Number(b[0])).sort((a,b)=>{
  if(a[0] === b[0]) return a[1] - b[1]
})

console.log(xySortPoint.map(v=>v.join(' ')).join('\n'))


 