function solution(num_list) {
    let answer = 0;
       
    const countFun = (v) => {
        if (v === 1) return;
        answer++;
        if( v % 2 === 0){
            v /= 2;
        } else {
            v = (v - 1) / 2;
        }
        countFun(v)
    } 
    
    num_list.forEach(v=>countFun(v))
    return answer;
}