def solution(n)
  total = 0
  tempstr = ''
  if n / 60 < 10
    total += n / 60
  else
    tempStr = (n / 60).to_s
    total += tempStr[0].to_i + tempStr[1].to_i
  end
  if n % 60 < 10
    total += n % 60
  else
    tempStr = (n % 60).to_s
    total += tempStr[0].to_i + tempStr[1].to_i
  end
  return total
end
