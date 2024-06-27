function solution(numbers, direction) {
    return numbers.map((v,i)=> direction === 'right' ? numbers[(i+numbers.length-1)%numbers.length] : i === numbers.length-1 ? numbers[0] : numbers[i+1]);
}