def solution(a, b, c)
  if a + b == c ||
  a - b == c ||
  a * b == c ||
  a.to_f / b.to_f == c
    return true
  end
  return false
end
