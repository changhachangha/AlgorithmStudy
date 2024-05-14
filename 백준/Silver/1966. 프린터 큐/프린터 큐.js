const { fdatasyncSync } = require('fs');

const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n');

// n : 테스트케이스 개수, arr = 테스트케이스
let [n, ...arr] = input;
arr = arr.map((item) => item.split(' ').map((v) => +v));

// 출력 결과값
let answer = '';

//테스트케이스 순회
for (let i = 0; i < arr.length; i += 2) {
    // 출력된 인쇄 수
    let count = 0;
    // 우선순위 배열
    const priorities = arr[i + 1];
    // 목표 문서번호
    let location = arr[i][1];

    while (true) {
        //우선순위 최댓값
        const max = Math.max(...priorities);
        //현재값
        const number = priorities.shift();

        //현재값이 최대값일때
        if (number === max) {
            //인쇄된 수 증가
            count++;
            //현재 위치가 목표 문서일경우
            if (location === 0) {
                //결과 반환
                answer += count + '\n';
                break;
            }
        } else {
            //현재 위치가 목표 문서가 아니라면
            //현재값을 큐의 마지막에 삽입
            priorities.push(number);
        }

        // 현재 위치가 목표문서라면( 현재 값이 최댓값이 아님 )
        if (location === 0) {
            // 현재 위치는 큐의 마지막
            location = priorities.length - 1;
        } else {
            // 현재 위치가 목표문서가 아니라면
            // 위치 앞으로 당김
            location--;
        }
    }
}

console.log(answer.trim());
