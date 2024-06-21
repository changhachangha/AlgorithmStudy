function solution(my_string) {
    return my_string.split(' ').map(v=> v.trim()).filter(v=> v != "");
}