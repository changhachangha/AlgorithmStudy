function solution(a, b) {
    var answer = 0;
    
    if (a % 2 === 0 && b % 2 === 0){//둘다 짝수
        answer = Math.abs(a - b);
        
    } else if ( a % 2 === 1 && b % 2 === 1 ){ //둘다 홀수
        answer = a ** 2 + b ** 2
    } else {
        answer = 2 * (a + b)
    }
    return answer;
}