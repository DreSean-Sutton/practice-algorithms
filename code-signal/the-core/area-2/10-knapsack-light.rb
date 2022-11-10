def solution(value1, weight1, value2, weight2, maxW)
  item1 = {"weight" => weight1, "value" => value1}
  item2 = {"weight" => weight2, "value" => value2}
  both_weights = {
    "weight" => item1["weight"] + item2["weight"],
    "value" => item1["value"] + item2["value"]
  }
  max_value = [item1["value"], item2["value"]].sort { |a, b| b <=> a }[0]
  if maxW < item1["weight"] && maxW < item2["weight"]
    return 0
  elsif maxW >= both_weights["weight"]
    return both_weights["value"]
  elsif maxW >= item1["weight"] && maxW >= item2["weight"]
    return max_value
  elsif maxW >= item1["weight"]
    return item1["value"]
  else
    return item2["value"]
  end
end
