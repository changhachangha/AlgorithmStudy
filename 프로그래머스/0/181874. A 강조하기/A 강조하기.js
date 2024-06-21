function solution(myString) {
    return myString.toLowerCase().split('').map(v=> v === 'a' ? 'A' : v).join('')
}