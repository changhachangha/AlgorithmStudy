function solution(arr, queries) {
    var answer = [];
    
    for(let i=0; i<queries.length; i++){
        const [s, e, k] = queries[i];
        const filterArr = arr.filter((v,i) => s <= i && i <= e && v > k)
        answer.push(filterArr.length === 0 ? -1 : filterArr.sort((a,b)=>a-b)[0])
    }
    return answer
}