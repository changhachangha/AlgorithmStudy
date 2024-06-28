function solution(s) {
    return [...s].filter(v=> s.indexOf(v) === s.lastIndexOf(v)).sort().join('')
}