function solution(numer1, denom1, numer2, denom2) {
    const gcd = (a,b) => a % b === 0 ? b : gcd(b,a%b)
    const numer = numer1 * denom2 + numer2 * denom1
    const denom = denom1 * denom2
    
    return [numer/gcd(numer,denom),denom/gcd(numer,denom)]
}