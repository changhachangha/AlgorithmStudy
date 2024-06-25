function solution(str_list) {
    var lIndex = str_list.indexOf('l')
    var rIndex = str_list.indexOf('r')
    console.log(lIndex,rIndex)
    return lIndex == -1 && rIndex == -1 ? [] : (lIndex > rIndex ? (rIndex === -1 ? str_list.slice(0,lIndex) : str_list.slice(rIndex + 1)) : (lIndex === -1 ? str_list.slice(rIndex + 1) : str_list.slice(0,lIndex))) 
}