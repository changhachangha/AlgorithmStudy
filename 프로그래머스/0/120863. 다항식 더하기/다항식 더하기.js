function solution(polynomial) {
    var answer = '';
    var 일차항 = 0;
    var 상수항 = 0;
    polynomial.split(' + ').forEach(v=>{
        const polyArr = v.split('x');
        if(polyArr.length === 2){
            일차항 += polyArr[0] === '' ? 1 : Number(polyArr[0])
        } else {
            상수항 += Number(polyArr[0])
        }
    })
    if(일차항 !== 0){
        if(일차항 === 1) answer = 'x';
        else answer = `${일차항}x`
    }
    if(상수항 !==0){
        if(일차항 == 0) answer = `${상수항}`;
        else answer += ` + ${상수항}`
    }
    return answer
}