function solution(myString) {
    return myString.split('x').map(v=>v.split('').length);
}