// https://edabit.com/challenge/SAdqaWKRpjLfZnGKA

function century(year) {
  let newStr = '';
  const flooredYear = Math.floor(year / 100);
  if (year % 100 === 0) {
    return newStr = `${flooredYear}th century`
  } else if (year % 100 !== 0 && flooredYear === 20) {
    return newStr = `${flooredYear + 1}st century`
  } else {
    return newStr = `${flooredYear + 1}th century`
  }
}
