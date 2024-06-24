function solution(arr, queries) {
    queries.forEach((v,i)=>{
        const [s,e] = v;
        const temp = arr[s];
        arr[s] = arr[e];
        arr[e] = temp;
    })
    return arr;
}