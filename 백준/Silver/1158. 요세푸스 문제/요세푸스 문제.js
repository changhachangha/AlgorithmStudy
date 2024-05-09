const { fdatasyncSync } = require('fs');

const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim();
// .split('\n');

const [N, K] = input.split(' ').map((v) => +v);
const queueArr = [];
const result = [];
let count = 1;

for (let i = 1; i <= N; i++) {
    queueArr.push(i);
}

while (queueArr.length) {
    const val = queueArr.shift();

    if (count % K === 0) {
        result.push(val);
    } else {
        queueArr.push(val);
    }
    count++;
}

console.log(`<${result.join(', ')}>`);
