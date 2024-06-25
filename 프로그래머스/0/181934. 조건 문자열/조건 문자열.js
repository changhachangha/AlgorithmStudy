function solution(ineq, eq, n, m) {
    const calc = {
        ">=" :  n >= m,
        "<=" :  n <= m,
        ">!" :  n > m,
        "<!" :  n < m
     }
    return calc[ineq+eq] ? 1 : 0;
}