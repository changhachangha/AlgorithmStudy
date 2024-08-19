function solution(numbers, target) {
    var answer = 0;
    //DFS 구현 (numbers 배열, idx 인덱스, curx 현재까지 값의 합)
    const dfs = (numbers, idx = 0, curx = 0) => {
        //종료조건 numbers 배열의 끝에 도달하고, target값일경우
        if(idx === numbers.length && curx === target){
            answer++
            return 
        } 
        //종료조건 numbers 배열의 끝에 도달하고, target 값에 부합할 경우
        else if(idx === numbers.length && curx !== target){
            return 
        }
        
        //다음값을 빼는경우
        dfs(numbers, idx + 1, curx + numbers[idx])
        //다음값을 더하는경우
        dfs(numbers, idx + 1, curx - numbers[idx])
    }
    dfs(numbers)
    return answer;
}