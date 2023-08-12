class Solution:
    def calPoints(self, operations: List[str]) -> int:
        total = 0
        scoreboard = []
        for i in range(len(operations)):
            if operations[i] == "+":
                addition = scoreboard[len(scoreboard) - 1] + scoreboard[len(scoreboard) - 2]
                scoreboard.append(addition)
                total += addition
            elif operations[i] == "C":
                total -= scoreboard.pop()
            elif operations[i] == "D":
                scoreboard.append(scoreboard[len(scoreboard) - 1] * 2)
                total += scoreboard[len(scoreboard) - 1]
            else:
                scoreboard.append(int(operations[i]))
                total += int(operations[i])
        return total
