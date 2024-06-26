function getKeyByValue(object, value) {
  return Object.keys(object).find(key => object[key] === value);
}

function getKeyByValueLast(object, value) {
  return Object.keys(object).reverse().find(key => object[key] === value);
}


function solution(a, b, c, d) {
    let answer;
    const count = [...new Set([a,b,c,d])].length;
    
    
    // 네 주사위에서 나온 숫자가 모두 p로 같다면 1111 × p점을 얻습니다.
    if(count === 1){
        return 1111 * Number(a);
    }
    // 네 주사위에 적힌 숫자가 모두 다르다면 나온 숫자 중 가장 작은 숫자 만큼의 점수를 얻습니다.
    if(count === 4){
        return Math.min(a,b,c,d)
    }
    
    const abcdObj = [a,b,c,d].reduce((prev,cur)=> {prev[cur] = ++prev[cur] || 1; return prev},{});
    // 세 주사위에서 나온 숫자가 p로 같고 나머지 다른 주사위에서 나온 숫자가 q(p ≠ q)라면 (10 × p + q)2 점을 얻습니다.
    // 주사위가 두 개씩 같은 값이 나오고, 나온 숫자를 각각 p, q(p ≠ q)라고 한다면 (p + q) × |p - q|점을 얻습니다.
    if(count === 2){
        let p = getKeyByValue(abcdObj,3) ?? getKeyByValue(abcdObj,2);
        let q = getKeyByValue(abcdObj,1) ?? getKeyByValueLast(abcdObj,2);
        p = Number(p);
        q = Number(q);
        return getKeyByValue(abcdObj,2) == undefined ? (10 * p + q) ** 2 : (p + q) * Math.abs(p-q)
        
        
    }
    // 어느 두 주사위에서 나온 숫자가 p로 같고 나머지 두 주사위에서 나온 숫자가 각각 p와 다른 q, r(q ≠ r)이라면 q × r점을 얻습니다.
    if(count === 3){
        let q = getKeyByValue(abcdObj,1);
        let r = getKeyByValueLast(abcdObj,1)
        return q * r
    }

    return answer;
}