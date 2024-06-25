function solution(picture, k) {
    var answer = [];
    
    return picture.map(v=> {
        let frame = [];
        for(let i=0; i<k; i++){
            frame.push(v.split('').map(v=> v.repeat(k)).join(''));
        }
        return [...frame]
    }).flat();
}