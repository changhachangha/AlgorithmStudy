function solution(n) {
    var answer = Array.from(Array(n),()=>Array(n).fill(0))
    fill(0,0,1,n);
    return answer;
    
    //채우기 함수 x좌표, y좌표 배열[x][y]값, n의 수
    function fill(x, y, num, n) {
        if(n <= 0) return;
        answer[x][y] = num
         for(let i=1; i<n; i++) answer[x][++y] = ++num;
         for(let i=1; i<n; i++) answer[++x][y] = ++num;
         for(let i=1; i<n; i++) answer[x][--y] = ++num;
         for(let i=1; i<n-1; i++) answer[--x][y] = ++num;

        fill(x,++y,++num,n-2)
    }
}

