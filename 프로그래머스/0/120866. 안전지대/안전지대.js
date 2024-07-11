function solution(board) {
    var answer = 0;
    for(let i=0; i<board.length; i++){
        for(let j=0; j<board[i].length; j++){
            if(board[i][j] === 1){
                const minusI = i-1 < 0 ? i : i-1;
                const plusI = i+1 == board.length ? i : i+1;
                const minusJ = j-1 < 0 ? j : j-1;
                const plusJ = j+1 == board[i].length ? j : j+1;
                board[minusI][j] = board[minusI][j] === 1 ? 1 : 2;
                board[minusI][minusJ] = board[minusI][minusJ] === 1 ? 1 : 2;
                board[minusI][plusJ] = board[minusI][plusJ] === 1 ? 1 : 2;
                board[i][minusJ] = board[i][minusJ] === 1 ? 1 : 2;
                board[i][plusJ] = board[i][plusJ] === 1 ? 1 : 2;
                board[plusI][minusJ] = board[plusI][minusJ] === 1 ? 1 : 2;
                board[plusI][j] = board[plusI][j] === 1 ? 1 : 2;
                board[plusI][plusJ] = board[plusI][plusJ] === 1 ? 1 : 2;
            }
        }
    }
    const safeZone = board.flat().filter(v=> (v !== 1 && v !== 2))
    
    return safeZone.length;
}