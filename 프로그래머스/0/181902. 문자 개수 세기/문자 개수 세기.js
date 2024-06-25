function solution(my_string) {
    // 아스키코드 A 65 , a 97
    var lowerAlp = new Array(26).fill(0);
    var upperAlp = new Array(26).fill(0);
    
    for(let alp of my_string){
        if('a' <= alp && alp <= 'z'){
            lowerAlp[alp.charCodeAt() % 97]++
        } else {
            upperAlp[alp.charCodeAt() % 65]++
        }
    }
    
    return [...upperAlp, ...lowerAlp];
}