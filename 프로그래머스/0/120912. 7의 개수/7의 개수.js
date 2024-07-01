function solution(array) {
    return array.reduce((prev,curr)=> prev + (curr.toString().split('7').length -1),0)
}