function solution(arr) {
    let arrLength = 1;
    
    while(arrLength < arr.length){
        arrLength *= 2;
    }
    
    return new Array(arrLength).fill(0).map((v,i)=> arr[i] > 0 ? arr[i] : v)
}