function solution(sides) {
    let answer = 0;
    const maxNum = sides.sort((a,b)=>b-a)[0]
    const anotherNum = sides[1];
    //주어진 두 수중 가장 긴 변이 존재할때
    for(let i=maxNum-anotherNum + 1; i<=maxNum; i++){
        answer++;
    }
    //새로운 수가 가장 긴 변 일때
    for(let i=maxNum + 1; i< maxNum + anotherNum; i++){
        answer++;
    }
    return answer;
}