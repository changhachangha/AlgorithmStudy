function solution(myString, pat) {
    var answer = 0;
    while(myString.indexOf(pat) > -1){
        answer++;
        console.log(myString)
        myString = myString.slice(myString.indexOf(pat)+1)
        console.log(myString)
    }
    return answer;
}