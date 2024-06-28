function solution(my_string) {
    return my_string.split(/[a-zA-Z]/g).reduce((prev,curr)=> Number(curr) ? Number(curr) + prev : prev,0)
}