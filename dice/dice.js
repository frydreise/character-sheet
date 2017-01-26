var sides = 1;

function Die (_sides) {
    sides = _sides;
    
}

function rollSingle () {
    return Math.ceil(Math.random() * sides);    
}

function roll (noOfDice = 1) {
    var total = 0;
    for (var i = 0; i < noOfDice; i++) {
        total += rollSingle();
    }
    return total;
}

Die.prototype.roll = roll;

module.exports = Die;