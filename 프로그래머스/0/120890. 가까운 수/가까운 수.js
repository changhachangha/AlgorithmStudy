function solution(array, n) {
    let ind = 100;
    let deff = 10000;
    array.sort().forEach((v,i)=>{
        if(deff > Math.abs(v-n)) {
            deff = Math.abs(v-n)
            ind = i
        }
    })
    return array[ind];
}