let getRangeResult = {}

const getRangeReport = (start, end) => {

  function handleTotal () {
    let totalSum = 0;
    for (let i = start; i <= end; i++) {
      totalSum += i
    }
    return totalSum;
  }

  function handleOdds () {
    let numArr = [];
    for(let i = start; i <= end; i++) {
      if (i % 2 !== 0) {
        numArr.push(i);
        i++;
      }
    }
    return numArr;
  }

  function handleEvens() {
    let numArr = [];
    for(let i = start; i <= end; i++) {
      if (i % 2 === 0) {
        numArr.push(i);
        i++;
      }
    }
    return numArr;
  }

  function handleRange() {
    let numArr = [];
    for(let i = start; i <= end; i++) {
      numArr.push(i);
    }
    return numArr;
  }

  function handleAverage() {
    let numberCounter = 0;
    let total = 0;
    for(let i = start; i <= end; i++) {
      total += i
      numberCounter++
    }
    return total / numberCounter;
  }

  return getRangeResult = {
  total: handleTotal(),
  odds: handleOdds(),
  evens: handleEvens(),
  range: handleRange(),
  average: handleAverage()
  };
}
// LFZ - Cody Miller: coffee - coder - miller: 10: 02 AM
// LFZ - Tim Davis | Post

// Practice Interview Problem
// Last edited 1 year agoClick to collapse
// Timed coding challenges are common during the interview process.Different companies do different types of technical assessments, but today you will be trying a small JavaScript challenge.

// The time limit is 60 minutes.When you are done, send your solution to the instructors in a code snippet on Slack.You can create a text snippet by clicking the little lightning bolt below the message box, choosing Create a text snippet, and pasting in your solution.

//   Again, different companies give different types of challenges.There is no industry standard.For this practice problem you are given no starter code, no automated tests, and no hints.Also, the instructors will not be answering questions for this practice problem.These restrictions are not true for all real - world interview challenges.However, one thing that is true for all real - world interview challenges and all code written by you:

// NEVER turn in a solution without checking it.
// NEVER turn in a solution that immediately throws an error.

// You are free to use every skill you’ve learned until now.You are also free to use Google, MDN, etc if you get stuck.However, the challenge is not asking for anything more than what’s been covered in class already, so try to avoid immediately searching for a solution.Only core fundamentals are needed and this is your chance to do an honest check of your abilities for real without a safety net.

// If you are unable to complete the challenge, that is ok.Just turn in what you have when the time limit is up and include a note stating that you were not able to finish in time.

//   Deliverable
// Your solution should be turned in directly to the instructors as a text snippet in Slack.

// Problem Statement
// Define a function named getRangeReport with two parameters, start and end.The function should return an object containing several properties holding information about the numbers between start and end.

// You can assume the following things about your parameters:

// start and end are guaranteed to be integers
// start is guaranteed to be less than or equal to end

// The returned object should have the following properties:

// total - the sum of all integers from start to end.
//   odds - an array containing all of the odd integers from start to end.
//     evens - an array containing all of the even integers from start to end.
//       range - an array containing all integers from start to end.
//         average - the average of all integers from start to end.
