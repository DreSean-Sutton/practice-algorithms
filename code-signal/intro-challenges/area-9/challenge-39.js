/*
-create a variable named item1 and assign it the value of an empty object literal
-create a variable named item2 and assign it the value of an empty object literal
-assign the value of value1 to the value property of item1
-assign the value of weight1 to the weight property of item1
-assign the value of value2 to the value property of item2
-assign the value of weight2 to the weight property of item2
-create a variable named bothWeights and assign it the value of item1.weight + item2.weight
-if maxW - bothWeights is greater than or equal to 0:
  -return item1.value + item2.value;
-else if maxW - item1.weight is greater than or equal to 0 and:
maxW - item2.weight is greater than or equal to 0:
  -create a variable named preSortArray and assign it the value of [item1.value, item2.value]
  -return preSortArray.sort((a, b) => { return b - a }) at index 0

-else if maxW - item1.weight is greater than or equal to 0:
  -return item1.value
-else if maxW - item2.weight is greater than or equal to 0:
  -return item2.value
-else:
  -return 0;
*/

let solution = (value1, weight1, value2, weight2, maxW) => {
  debugger;

  const item1 = {};
  const item2 = {};
  item1.value = value1;
  item1.weight = weight1;
  item2.value = value2;
  item2.weight = weight2;
  const bothWeights = item1.weight + item2.weight;
  if (maxW - bothWeights >= 0) {
    return item1.value + item2.value;
  } else if (maxW - item1.weight >= 0 &&
    maxW - item2.weight >= 0) {
    const preSortArray = [item1.value, item2.value];
    return preSortArray.sort((a, b) => { return b - a })[0]
  } else if (maxW - item1.weight >= 0) {
    return item1.value;
  } else if (maxW - item2.weight >= 0) {
    return item2.value
  } else {
    return 0;
  }

}

solution(10, 5, 6, 4, 8);
