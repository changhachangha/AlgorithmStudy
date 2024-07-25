function solution(lines) {
    var answer = 0;
    let lineMap = new Map();
    //각 lines의 시작,종료를 map으로 추가
    for(let [start,end] of lines) {
        for(let i=start; i<end; i++){
            lineMap.has(i) ? lineMap.set(i,lineMap.get(i) + 1) : lineMap.set(i,1)
        }
    }
    
    for(let key of lineMap.keys()){
        if(lineMap.get(key) >= 2) answer++;
    }
    
    return answer;
}