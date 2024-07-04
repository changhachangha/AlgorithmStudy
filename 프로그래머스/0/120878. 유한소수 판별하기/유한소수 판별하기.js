function solution(a, b) {
    var answer = 0;
    let getGCD2 = (num1, num2) => {
  
        while(num2 > 0){
            let r = num1 % num2;
            num1 = num2;
            num2 = r;
        } 

        return num1;
    }
    const gcd = getGCD2(a,b)
    
    if( b % gcd === 0){
        b = b/gcd;
    }
    while(b % 2 === 0){
        b = b / 2;
    }
    while(b % 5 === 0){
        b = b / 5;
    }
    return b <= 2 ? 1 : 2;
    
    
}