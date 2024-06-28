function solution(my_string) {
    return my_string.replace(/[a-zA-Z]*/g,'').split('').map(v=>+v).sort((a,b)=>a-b)
}