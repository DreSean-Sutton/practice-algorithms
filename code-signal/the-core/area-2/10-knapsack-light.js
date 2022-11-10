function solution(value1, weight1, value2, weight2, maxW) {
  const item1 = { weight: weight1, value: value1 };
  const item2 = { weight: weight2, value: value2 };
  const maxValueItem = [item1, item2].sort((a, b) => b.value - a.value);
  const bothWeights = item1.weight + item2.weight;

  if (maxW < item1.weight &&
    maxW < item2.weight) {
    return 0;
  } else if (maxW - bothWeights >= 0) {
    return item1.value + item2.value;
  } else if (maxW >= item1.weight &&
    maxW >= item2.weight) {
    return maxValueItem[0].value;
  } else if (maxW >= item1.weight) {
    console.log('This hit');
    return item1.value;
  } else {
    return item2.value;
  }
}
