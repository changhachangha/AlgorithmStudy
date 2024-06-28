function solution(numbers) {
    return Math.max(numbers.sort((a,b)=>b-a).slice(0,2).reduce((prev,curr)=>prev*curr),numbers.sort((a,b)=>a-b).slice(0,2).reduce((prev,curr)=>prev*curr));
}