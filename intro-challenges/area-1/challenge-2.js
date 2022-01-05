function solution(year) {
    let century = year / 100
    if(year % 100 === 0) {
        return century
    } else {
    return Math.floor(century + 1);
    }

}
