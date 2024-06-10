function solution(n, control) {
    return control.split('').map((el,idx)=> {
        if(el === 'w'){
            return 1;
        } else if(el === 's'){
            return -1;
        } else if(el === 'd'){
            return 10;
        } else if(el === 'a'){
            return -10;
        }
    }).reduce((acc,cur)=> acc+cur,n);
}