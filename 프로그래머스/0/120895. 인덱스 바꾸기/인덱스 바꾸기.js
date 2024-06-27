function solution(my_string, num1, num2) {
    
    return [...my_string].map((v,i)=>{
        if(i === num1 ) return [...my_string][num2]
        if(i === num2 ) return [...my_string][num1]
        return v
    }).join('')
}