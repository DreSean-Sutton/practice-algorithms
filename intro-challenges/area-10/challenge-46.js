function solution(votes, k) {
  debugger;
  let winners = 0;
  let testDuplicates = 0;
  const sortedVotes = votes.sort((a, b) => b - a);
  const highestNum = sortedVotes[0];
  votes.forEach(vote => {
    if (vote + k > highestNum) {
      winners++
    } else if (vote === highestNum) {
      testDuplicates++
    }
  });
  if (testDuplicates < 2) {
    winners += testDuplicates
  }
  return winners;
}

solution([2, 3, 5, 2]);
