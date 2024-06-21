function solution(binomial) {
    const[a,exp,b] = binomial.split(' ');
    let answer = 0;
    switch(exp){
        case "+":
            answer = +a + +b;
            break;
        case "-":
            answer = a - b;
            break;
        case "*":
            answer = a * b;
            break;
    }
    return answer;
}