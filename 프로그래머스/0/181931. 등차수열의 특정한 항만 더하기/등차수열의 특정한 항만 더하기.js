function solution(a, d, included) {
    return included.map((v,i) => v ? a + (i * d) : 0).reduce((acc,cur)=> acc+cur,0)
}