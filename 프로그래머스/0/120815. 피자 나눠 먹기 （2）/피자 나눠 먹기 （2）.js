function solution(n) {
    let njogak = 0;
    while(1){
        njogak += n;
        if(njogak % 6 === 0){
            return njogak / 6;
        }
    }
}