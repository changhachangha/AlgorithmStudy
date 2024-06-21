function solution(my_strings, parts) {
    return my_strings.reduce((acc,cur,index) => {
        let [x,y] = parts[index];
        return acc + cur.slice(x,y+1)
        
    },'')
}