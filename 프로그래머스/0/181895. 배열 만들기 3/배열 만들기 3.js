function solution(arr, intervals) {
    return intervals.reduce((acc,cur) => {
        
        let [s,e] = cur;
        return acc.concat(arr.slice(s,e + 1))
    },[])
}