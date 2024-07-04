function solution(score) {
    var answer = [];
    const scoreMap = score.map(v=> v[0] + v[1]).sort((a,b)=>b-a);
    score.forEach(([a,b],i)=>{
        answer.push(scoreMap.indexOf(a+b) + 1)
    })
    return answer;
}