function solution(n) {
    return new Array(Math.ceil(n/2)).fill(0).map((_,i) => i*2 + 1);
}