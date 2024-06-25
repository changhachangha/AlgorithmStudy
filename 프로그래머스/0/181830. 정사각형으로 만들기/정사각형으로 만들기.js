function solution(arr) {
    var arrLength = arr.length >= arr[0].length ? arr.length : arr[0].length
    var answer = Array.from(Array(arrLength), ()=> new Array(arrLength).fill(0));
    
    return answer.map((v,i) => [...arr[i] ?? '', ...v].slice(0,arrLength));
}