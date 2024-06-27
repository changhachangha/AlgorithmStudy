function solution(my_string) {
    return [...my_string].reduce((prev,curr)=> !isNaN(curr) ? Number(prev) + Number(curr) : prev,0);
}