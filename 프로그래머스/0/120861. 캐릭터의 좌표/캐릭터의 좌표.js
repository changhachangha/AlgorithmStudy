function solution(keyinput, board) {
    let [i,j] = [0,0];
    for(let v of keyinput){
        if( v === 'up' &&  j < ~~(board[1]/2)){
            j++;
            continue;
        }
        if( v === 'down' && j > -~~(board[1]/2)){
            j--;
            continue;
        }
        if( v === 'left' && i > -~~(board[0]/2)){
            i--;
            continue;
        }
        if( v === 'right' && i < ~~(board[0]/2)){
            i++;
            continue;
        }
        
    }
    return [i,j];
}