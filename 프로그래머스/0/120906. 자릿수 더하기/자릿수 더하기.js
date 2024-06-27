function solution(n) {
    return [...n.toString()].reduce((prev,cur)=> Number(prev) + Number(cur),0);
}