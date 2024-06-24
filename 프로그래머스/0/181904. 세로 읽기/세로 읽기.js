function solution(my_string, m, c) {
    let answer = '';
    let strArr = [];
    for(let i =0; i<my_string.length; i+=m){
        strArr.push(my_string.substring(i, i+m))
    }
    strArr = strArr.map(v=>v.split(''))
    
    for(let j=0; j<strArr.length; j++){
        answer += strArr[j][c-1];
    }
    
    return answer;
}