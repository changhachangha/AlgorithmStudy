function solution(array) {
    var answer = 0;
    var obj = {};
    array.forEach(v=> obj[v] = obj[v] + 1 || 1)
    
    var max = Math.max(...Object.values(obj))
    if(Object.values(obj).filter(v=> v===max).length >= 2) return -1
    Object.entries(obj).forEach(([key,value])=>{
        if(value === max) answer = key;
    })
    return parseInt(answer);
}