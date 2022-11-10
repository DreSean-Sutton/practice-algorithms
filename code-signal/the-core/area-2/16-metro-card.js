function solution(lastNumberOfDays) {
  if (lastNumberOfDays === 30) {
    return [31];
  } else if (lastNumberOfDays === 31) {
    return [28, 30, 31];
  } else if (lastNumberOfDays === 28) {
    return [31];
  }
}

// OTHER WAY OF DOING IT BELOW (not mine)

function solution(lastNumberOfDays) {
  var result = {
    30: [31],
    28: [31],
    31: [28, 30, 31]
  };
  return result[lastNumberOfDays];
}
