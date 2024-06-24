function solution(strArr) {
    var answer = [];
    
    const strCount = strArr.map(v=>v.length)
    const strSet = Array.from(new Set(strCount))
    strSet.map(v=> {
        
        const count = strCount.filter((el,i)=> el === v ).length
        answer.push(count)
    })
    return Math.max(...answer);
}