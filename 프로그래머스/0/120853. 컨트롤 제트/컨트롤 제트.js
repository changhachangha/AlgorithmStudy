function solution(s) {
    var answer = 0;
    let arrayS = s.split(' ');
    for(let i=0; i<arrayS.length; i++){
        if(arrayS[i] !== 'Z' && arrayS[i+1] !== 'Z') answer += parseInt(arrayS[i])
    }
    return answer;
}