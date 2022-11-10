def solution(a, b)
  if a == b
    return false
  end
  if a > b
    return true
  end
  if a % 2 == 0 && b % 2 == 0
    return false
  end
  if a % 2 != 0 && b % 2 != 0
    return false
  end
  if a < b
    return true
  end
  return false
end
