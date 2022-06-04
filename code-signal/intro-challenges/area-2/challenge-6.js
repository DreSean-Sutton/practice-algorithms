function solution(statues) {
  let solutions = 0;
  // if(!statues) {
  //     return;
  // }

  let orderedStatues = statues.sort(function (a, b) { return (a - b) });
  for (let i = orderedStatues[0]; i < orderedStatues[orderedStatues.length - 1]; i++) {
    if (!orderedStatues.includes(i)) {
      solutions++
    }
    console.log(i);
  }
  return solutions;
}

// BETTER WAY TO DO THIS BELOW (Not mine)

function solution(sequence) {
  return Math.max(...sequence) - Math.min(...sequence) - sequence.length + 1;
}
