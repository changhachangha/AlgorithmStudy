function solution(myString) {
    return [...myString].map(v=> v.charCodeAt() < 108 ? 'l' : v).join('');
}