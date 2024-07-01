function solution(my_string) {
    
    const myStringSplit = my_string.split(' ');
    let answer = +myStringSplit[0]
    
    for(let i=1; i < myStringSplit.length; i+=2){
        if(myStringSplit[i] === '+'){
            answer += +myStringSplit[i+1]
        } else {
            answer -= +myStringSplit[i+1]
        }     
    }
    return answer;
}