function solution(code) {
    var answer = '';
    let mode = false;
    
    for(let i=0; i<code.length; i++){
        if(code[i] == 1 ) {
            mode = !mode;
            continue;
        }
       
        if(!mode){
           if(i % 2 === 0) answer += code[i];     
        }else{
           if(i % 2 === 1) answer += code[i]; 
        }
    }
    
    return answer === '' ? 'EMPTY' : answer
}