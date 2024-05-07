const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  
const N = +input.shift();

const arr = input.map(v=>v.replace('\r','')).map(v=>v.split(' '))
const stack = [];
const result = [];

for(let i=0; i<N; i++){
  const [word, val] = arr[i];
  
  switch(word){
    case 'push':
    stack.push(Number(val));
    break;
    case 'pop':
    result.push(stack.pop() ?? -1);
    break;
    case 'size':
    result.push(stack.length);
    break;
    case 'empty':
    result.push(stack.length ? 0 : 1);
    break;
    case 'top':
    result.push(stack.length == 0 ? -1 : stack[stack.length-1]);
    break;
  }
}
console.log(result.join('\n') )

