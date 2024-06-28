function solution(n) {
    let prev = 1;
    let curr = 1;
    while(true){
        prev = prev * curr
        console.log(prev,curr)
        if(n < prev) return curr -1 
        curr++
    }
}