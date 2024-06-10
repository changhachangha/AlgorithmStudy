function solution(n, k) {
    
    return new Array(Math.floor(n/k)).fill(k).map((v,idx)=>v*(idx+1));
}