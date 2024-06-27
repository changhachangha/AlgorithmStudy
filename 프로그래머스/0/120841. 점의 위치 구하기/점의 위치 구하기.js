function solution(dot) {
    const xy = [[1,1],[-1,1],[-1,-1],[1,-1]]
    console.log(dot.map(v=> v / Math.abs(v)))
    
    for(let i=0 ; i<xy.length; i++){
        
        if(xy[i].join('') == dot.map(v=> v / Math.abs(v)).join(''))
            return i+1
    } 
}