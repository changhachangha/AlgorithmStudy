function solution(i, j, k) {
    var answer = 0;
    for(i; i<=j; i++){
        i.toString().split('').forEach(v=>{
            if(v === k.toString()) answer++
        }) 
    }
    return answer;
}