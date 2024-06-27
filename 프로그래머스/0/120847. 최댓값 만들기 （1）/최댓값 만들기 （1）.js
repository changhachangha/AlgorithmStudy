function solution(numbers) {
    return numbers.sort((a,b)=>b-a).filter((_,i)=> i < 2).reduce((prev,curr)=> prev*curr);
}