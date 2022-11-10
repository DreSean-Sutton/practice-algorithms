function solution(young, beautiful, loved) {
  if (!young && beautiful) {
    return loved;
  } else if (young && !beautiful) {
    return loved;
  } else if (!young && !beautiful) {
    return loved;
  }
  return !loved;
}

// OTHER WAY OF DOING IT BELOW
function solution(young, beautiful, loved) {
  return loved !== (young && beautiful);
}
