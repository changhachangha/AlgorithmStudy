function solution(n) {
    let arr = Array.from(Array(n), () => new Array(n).fill(0));
    let i = 0;
    
    while(i < n){
        
        arr[i][i] = 1;
        i++;
    }
    
    return arr;
}