function solution(my_string, n) {
    return [...my_string].reduce((prev,curr)=> prev + curr.repeat(n),'');
}