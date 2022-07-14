function solution(names) {
  const result = [];
  names.forEach(name => {
    let counter = 1,
      tempName = name;
    while (result.includes(tempName)) {
      tempName = `${name}(${counter})`;
      counter++;
    }
    result.push(tempName);
  });
  return result;
}
