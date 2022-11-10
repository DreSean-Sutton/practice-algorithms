def solution(score1, score2)
  scores = [score1, score2]
  if score1 > 7 || score2 > 7
    return false
  end
  if score1 == 7 || score2 == 7
    if score1 == score2
      return false
    end
    scores.each do |elem|
      if elem == 5 || elem == 6
        return true
      end
    end
    return false
  end
  if score1 == 6 and score2 == 6
    return false
  end
  if score1 == 6 || score2 == 6
    scores.each do |elem|
      if elem == 5
        return false
      end
    end
    return true
  end
  return false
end
