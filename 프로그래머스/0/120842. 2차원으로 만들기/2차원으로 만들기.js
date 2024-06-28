function solution(num_list, n) {
    var answer = Array.from(Array(num_list.length/n),()=>Array(n).fill(0))
    let k = 0;
    for(let i = 0; i < num_list.length/n; i++){
        for(let j = 0; j < n; j++){
            answer[i][j] = num_list[k++]
        }
    }
    return answer;
}   