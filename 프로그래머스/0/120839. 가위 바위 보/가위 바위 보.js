function solution(rsp) {
    const winRsp = {
        '2' : 0,
        '0' : 5,
        '5' : 2
    }
    return [...rsp].map(v=>winRsp[v]).join('');
}