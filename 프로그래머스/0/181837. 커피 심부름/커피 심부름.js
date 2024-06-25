function solution(order) {
    let answer = 0;
    order.forEach(v=>{
        if ( v.includes('latte') ) answer +=  5000
        else answer += 4500
    })
    return answer
}