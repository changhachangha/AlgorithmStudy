const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  
const N = +input.shift();
const [A,B] = input.map(v=>v.replaceAll('\r','')).map(v=>v.split(' '));

const Aasc = A.sort((a,b)=>a-b);
const Bdesc = B.sort((a,b)=>b-a);
let result = 0;
for(let i=0; i<N; i++){
  const Aval = Number(Aasc[i]);
  const Bval = Number(Bdesc[i]);
  result += (Aval * Bval);
}

console.log(result)


