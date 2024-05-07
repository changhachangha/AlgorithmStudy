const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  
const lStack = input.shift().replace('\r','').split('');
const rStack = [];
const N = +input.shift();
const arr = input.map(v=>v.replace('\r' ,'')).map(v=>v.split(' '));

for(let i=0; i<N; i++){
  const [word, val] = arr[i];

  switch(word){
    case 'P':
      lStack.push(val);
    break;
    case 'L':
    if(lStack.length !== 0) rStack.push(lStack.pop());
    break;
    case 'D':
    if(rStack.length !== 0)  lStack.push(rStack.pop())
    break;
    case 'B':
      if(lStack.length !== 0) lStack.pop();
    break;
  }
} 

console.log(lStack.concat(rStack.reverse()).join(''));

