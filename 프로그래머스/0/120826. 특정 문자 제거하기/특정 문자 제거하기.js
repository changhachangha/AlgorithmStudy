function solution(my_string, letter) {
    return [...my_string].map(v=> v !== letter ? v : '').join('');
}