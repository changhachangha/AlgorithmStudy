function solution(spell, dic) {
    let answer = 0;
    const jsonSpell = JSON.stringify(spell.sort())
    dic.forEach(v=>{
        const jsonDic = JSON.stringify(v.split('').sort())
        if(jsonSpell == jsonDic ) {
            answer = 1;
            return;
        }
    })
    return answer === 0 ? 2 : 1
}