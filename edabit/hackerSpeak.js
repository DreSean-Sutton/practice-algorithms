// https://edabit.com/challenge/cada8J3AWGRhwQhkk

function hackerSpeak(str) {
  const splitStr = str.split('');
  let newStr = '';
  splitStr.forEach(element => {
    if (element === 'a') {
      newStr += '4'
    } else if (element === 'e') {
      newStr += '3'
    } else if (element === 'i') {
      newStr += '1'
    } else if (element === 'o') {
      newStr += '0'
    } else if (element === 's') {
      newStr += '5'
    } else {
      newStr += element
    }
  })
  return newStr
}
