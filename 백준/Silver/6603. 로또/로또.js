const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n');

const testCase = input.map((v) => v.split(' ').map((v) => +v));
testCase.pop();

const result = [];
testCase.forEach((item, index) => {
    const testArr = item.slice(1, item.length);
    result.push(getCombinations(testArr, 6).join('\n').replaceAll(',', ' '));
});

let resultText = '';
result.forEach((el, i) => {
    resultText += el + '\n\n';
});
console.log(resultText.slice(0, -2));

function getCombinations(arr, selectNumber) {
    const results = [];
    if (selectNumber === 1) return arr.map((v) => [v]);
    // n개중에서 1개 선택할 때 (nC1), 해당 값 return

    arr.forEach((fixed, index, origin) => {
        const rest = origin.slice(index + 1);
        // 해당하는 고정수를 제외한 나머지 뒷자리
        // ex) [1,2,3].slice(1) => [2,3]
        const combinations = getCombinations(rest, selectNumber - 1);
        // 나머지에 대한 조합을 구함
        const attached = combinations.map((v) => [fixed, ...v]);
        // 고정수 + 나머지에 대한 조합에 대한 배열
        results.push(...attached);
        // 배열 spread syntax로 pusu
    });

    return results;
}
