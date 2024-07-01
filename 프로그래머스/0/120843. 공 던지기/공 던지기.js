function solution(numbers, k) {
   console.log(k,(2 * (k -1) ) % numbers.length)
    return numbers[(2 * (k - 1)) % numbers.length];
}