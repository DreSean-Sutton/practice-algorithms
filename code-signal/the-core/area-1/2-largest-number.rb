def solution(n)
  total = ""
  n.times do
    total += "9"
  end
  return total.to_i
end

# ANOTHER WAY, BELOW

def solution(n)
  10**n -1
end
