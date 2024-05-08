const { fdatasyncSync } = require('fs');

const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n');

const N = +input.shift();
const stackN = input.map((v) => v.replaceAll('\r', '')).map((v) => +v);
let stackLength = 0;
const stackArr = [];
let result = [];
for (let i = 0; i < N; i++) {
    const val = stackN[i];

    while (val > stackLength) {
        stackArr.push(++stackLength);
        result.push('+');
    }

    if (val <= stackLength && stackArr.length > 0) {
        if (stackArr[stackArr.length - 1] == val) {
            stackArr.pop();
            result.push('-');
        } else {
            result = ['NO'];
            break;
        }
    } else {
        result = ['NO'];
        break;
    }
}

console.log(result.join('\n'));
