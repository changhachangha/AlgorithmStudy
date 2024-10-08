function solution(nums) {

    
    // 1. 뽑는 개수는 nums.length / 2
    // 2. 최대 종류만큼만 뽑을 수 있음 set. length ?
    // min 값을 하면 될듯?
    
    // 간단한 풀이방법
    //return Math.min(nums.length / 2, new Set(nums).size)
    
    // 해시 풀이
    
    const divCount = nums.length / 2;
    // 여기서부터 해시
    const hashCount = nums.reduce((total, cur) => {
        total[cur] ? total[cur]++ : total[cur] = 1;
        return total;
    },{});
    // 중복되지 않는 값 찾는거라 Object.keys 로 키값만 찾아도됨
    
    return Math.min(divCount, Object.keys(hashCount).length);
    
}