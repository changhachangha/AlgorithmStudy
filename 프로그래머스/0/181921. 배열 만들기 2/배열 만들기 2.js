function solution(l, r) {
    var answer = [];
    for(let i=l; i<=r; i++){
        const currentVal = i.toString();
        
        if (currentVal.split('').every(v=> +v===0 || +v===5) ){
            answer.push(i)
        }
    }
    return answer.length === 0 ? [-1] : answer;
}