function solution(n) {
    var answer = 0;
    for(let i=1; i<=n; i++){
        let arr = [];
        for(let j=1; j <= Math.sqrt(i); j++){
            if(i % j === 0) {
                arr.push(j)
                if(i / j !== j) arr.push(i/j)
            }
        }
        
        if(arr.length > 2) answer++
    }
    return answer;
}