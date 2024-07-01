function solution(emergency) {
    const sortedEmergency = [...emergency].sort((a,b)=>b-a)
    
    return emergency.map(v=> sortedEmergency.indexOf(v) + 1);
}