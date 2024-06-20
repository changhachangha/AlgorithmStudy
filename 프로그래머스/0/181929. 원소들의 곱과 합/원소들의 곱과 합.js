function solution(num_list) {
    return num_list.reduce((cur,prev) => cur*prev ,1) > num_list.reduce((cur,prev) => cur + prev ,0) ** 2 ? 0 : 1;
}