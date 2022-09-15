def solution(young, beautiful, loved)
  return !loved if young && beautiful
  return loved if !young && !beautiful
  return loved if !young || !beautiful
end

# OTHER WAY OF DOING IT BELOW

def solution(young, beautiful, loved)
    loved != (young&&beautiful)
end
