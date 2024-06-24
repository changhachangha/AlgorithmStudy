function solution(arr, flag) {
    var answer = [];
    
    for( let i=0; i<flag.length; i++){
        let j = 0;
        if(flag[i]){
            while(j++ < arr[i] * 2) answer.push(arr[i])
        } else {
            while(j++ < arr[i]) answer.pop()
        }
    }
    
    return answer;
}