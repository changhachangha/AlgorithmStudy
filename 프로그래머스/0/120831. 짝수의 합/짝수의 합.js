function solution(n) {
    return new Array(n).fill(0).map((_,i)=> i+1).reduce((prev,curr) => curr % 2 ===0 ? prev + curr : prev ,0)
}