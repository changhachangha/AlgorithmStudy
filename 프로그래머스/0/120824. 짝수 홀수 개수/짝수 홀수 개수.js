function solution(num_list) {
    let even = num_list.filter(v=> v % 2 === 0).length
    return [even, num_list.length - even];
}