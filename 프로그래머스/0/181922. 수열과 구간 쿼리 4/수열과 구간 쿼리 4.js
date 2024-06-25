function solution(arr, queries) {
    var answer = [];
   
    queries.forEach(([s,e,k])=>{
        arr.forEach((v,i) => {
            if((s <= i && i <= e) && i % k === 0){
                arr[i] += 1
            }
        })        
    })
    return arr
}