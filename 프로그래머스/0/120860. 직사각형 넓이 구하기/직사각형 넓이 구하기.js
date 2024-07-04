function solution(dots) {
    const upY = Math.max(dots[0][1],dots[1][1],dots[2][1],dots[3][1])
    const upX = Math.max(dots[0][0],dots[1][0],dots[2][0],dots[3][0])
    const downY = Math.min(dots[0][1],dots[1][1],dots[2][1],dots[3][1])
    const downX = Math.min(dots[0][0],dots[1][0],dots[2][0],dots[3][0])
    
    return Math.abs(upX - downX) * Math.abs(upY - downY);
}