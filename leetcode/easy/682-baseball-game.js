var calPoints = function(operations) {
    total = 0;
    scoreboard = [];
    for(let i = 0; i < operations.length; i++) {
        if(operations[i] === "+") {
            addition = scoreboard[scoreboard.length - 1] + scoreboard[scoreboard.length - 2];
            scoreboard.push(addition);
            total += addition;
        } else if(operations[i] === "C") {
            total -= scoreboard.pop();

        } else if(operations[i] === "D") {
            scoreboard.push(scoreboard[scoreboard.length - 1] * 2);
            total += scoreboard[scoreboard.length - 1];
        } else {
            scoreboard.push(Number(operations[i]));
            total += Number(operations[i]);
        }
    }
    return total
};
