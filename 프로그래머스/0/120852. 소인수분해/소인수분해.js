function solution(n) {
    var answer = [];
    let i = 2;
    while(n > 1){
        if(n % i === 0){
            answer.push(i);
            n = ~~(n / i);
            i = 2;
        }else {
            i++;
        }
    }
    return [...new Set(answer)];
}