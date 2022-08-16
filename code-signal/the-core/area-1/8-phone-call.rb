def solution(min1, min2_10, min11, s)
  counter = 0
  while true
    case counter
    when 0 .. 1
      s -= min1
    when 2 .. 10
      s -= min2_10
    else
      s -= min11
    end
    if s < 0 and counter == 0
      return counter
    elsif s < 0
      return counter - 1
    elsif counter == 0
      counter = 2
    else
      counter += 1
    end
  end
end
