function solution(num_list) {
    let oddVal = 0;
    let evenVal = 0;
    num_list.map((v,i) => i % 2 === 0 ? evenVal += v : oddVal += v);
    
    return oddVal >= evenVal ? oddVal : evenVal
}