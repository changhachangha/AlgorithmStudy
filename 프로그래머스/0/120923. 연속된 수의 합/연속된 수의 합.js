function solution(num, total) {
    let answer = 0;
    let middel = ~~(total/num)
    let start = middel - (Math.round(num/2) - 1)
    
    
    return new Array(num).fill(start).map((v,i)=> v+i);
}