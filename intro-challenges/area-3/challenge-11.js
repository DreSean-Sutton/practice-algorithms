/*
-create a variable named ticketArr and assign it the value of ticket.toString().split('');
-create a variable named splitIndex and assign it the value of Math.floor(ticketArr.length / 2)
-create a variable named firstHalf and assign it the value of ticketArr.slice(0, splitIndex)
-create a variable named secondHalf and assign it the value of ticketArr.slice(splitIndex)
-create a variable named firstValue and assign it the value of 0
-create a variable named secondValue and assign it the value of 0
-create a for loop that:
  a. assign the value of 0 to i
  b. if i is less than splitIndex
  c. i++
  -firstValue += parseInt(firstHalf[i])
  -secondValue += parseInt(secondHalf[i])
-if (firstValue === secondValue)
  return true
  else
  return false
*/

function solution(ticket) {
  debugger
  let ticketArr = ticket.toString().split('');
  let splitIndex = Math.floor(ticketArr.length / 2);
  let firstHalf = ticketArr.slice(0, splitIndex);
  let secondHalf = ticketArr.slice(splitIndex);
  let firstValue = 0;
  let secondValue = 0;

  for (let i = 0; i < splitIndex; i++) {
    firstValue += parseInt(firstHalf[i]);
    secondValue += parseInt(secondHalf[i]);
  }

  if (firstValue === secondValue) {
    return true
  } else {
    return false;
  }
}

solution(123501);
