function solution(rank, attendance) {
    const [a,b,c] = rank.filter((v,i) => attendance[i] ).sort((a,b)=>a-b).slice(0,3)
    
    return 10000 * rank.indexOf(a) + 100 * rank.indexOf(b) + rank.indexOf(c);
}