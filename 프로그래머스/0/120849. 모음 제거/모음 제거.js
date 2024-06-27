function solution(my_string) {
    const moem = ['a','e','i','o','u'];
    return [...my_string].filter(v=> !moem.includes(v)).join('');
}