const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    console.log([...input[0]].map(v=> v === v.toLowerCase() ? v.toUpperCase() : v.toLowerCase()).join(''));
});