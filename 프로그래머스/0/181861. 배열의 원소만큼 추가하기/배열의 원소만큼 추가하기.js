function solution(arr) {
    return arr.map(v=> new Array(v).fill(v)).flat();
}