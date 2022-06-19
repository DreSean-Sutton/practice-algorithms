function solution(text) {
  let longestWord = '';
  const filteredStr = text.split(new RegExp(/[\W|\_]/g))
  for (const elem of filteredStr) {
    if (longestWord.length <= elem.length) {
      longestWord = elem;
    }
  }
  return longestWord;
}
