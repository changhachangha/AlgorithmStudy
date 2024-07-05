function solution(quiz) {
    var answer = [];
    for(let el of quiz){
        const 계산식 = el.split(' = ');
        if(eval(계산식[0]) == parseInt(계산식[1]))
            answer.push("O")
        else
            answer.push("X")
    }
    return answer;
}