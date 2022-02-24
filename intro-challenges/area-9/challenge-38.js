/*
-create a variable named currentDay = 0
-create a variable named currentHeight and assign it the value of 0
-creat a while loop that executes code block if currentHeight is less than desiredHeight
  -increment currentDay by 1
  -currentHeight += upSpeed
  -if currentHeight is equal to or greater than desiredHeight:
    -return currentDay
  -currentHeight -= downSpeed
*/

let solution = (upSpeed, downSpeed, desiredHeight) => {
  let currentDay = 0;
  let currentHeight = 0;
  while (currentHeight < desiredHeight) {
    currentDay++;
    currentHeight += upSpeed;
    if (currentHeight >= desiredHeight) {
      return currentDay
    }
    currentHeight -= downSpeed;
  }
}
