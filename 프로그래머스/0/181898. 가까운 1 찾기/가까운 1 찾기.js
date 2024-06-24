function solution(arr, idx) {
    return arr.map((v,i)=> i < idx ? 0 : v).indexOf(1)
}