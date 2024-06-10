function solution(my_string, index_list) {
    let answer = '';
    index_list.forEach((el,idx)=>{
        answer += my_string[el];
    })
    return answer;
}