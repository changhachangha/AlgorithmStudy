function solution(box, n) {
    return box.reduce((prev,curr)=> prev * ~~(curr/n),1);
}