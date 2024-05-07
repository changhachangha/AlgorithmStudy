const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  
const N = +input.shift();

const arr = input.map(v=>v.replace('\r','')).map(v=>v.split(' '))
const queue = [];
const result = [];

for(let i=0; i<N; i++){
  const [word, val] = arr[i];
  
  switch(word){
    case 'push_front':
    queue.unshift(Number(val));
    break;
    case 'push_back':
    queue.push(Number(val));
    break;
    case 'pop_front':
    result.push(queue.shift() ?? -1);
    break;
    case 'pop_back':
    result.push(queue.pop() ?? -1);
    break;
    case 'size':
    result.push(queue.length);
    break;
    case 'empty':
    result.push(queue.length ? 0 : 1);
    break;
    case 'front':
    result.push(queue.length == 0 ? -1 : queue[0]);
    break;
    case 'back':
    result.push(queue.length == 0 ? -1 : queue[queue.length-1]);
    break;
  }
} 
console.log(result.join('\n') )

