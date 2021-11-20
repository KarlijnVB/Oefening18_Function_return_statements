// Exercise 1: Checking if a number is big
console.log("Exercise 1: ");

const biggerThan100 = function (number1) {
    if (number1 > 100) {
        return "true"
    }
    return "false";
};

const result = biggerThan100(110);
console.log(result);

// This is a produce function

// Exercise 2: Bouncer at a club
console.log("Exercise 2: ");

const bouncerBotAtClub = function (numberOfPeople, maxPeople, ageVisitor) {
    if (ageVisitor < 18) {
        return "This is a club for adults"
    }
    else if (numberOfPeople > maxPeople) {
        return "It's too busy now, come back later"
    }
    else {
        return "Come in"
    }
}

const message = bouncerBotAtClub(100, 110, 19)
console.log(message);

// This is a do function

// Exercise 3: Calculating the average
console.log("Exercise 3: ");

const CalculatingAverage = function (nr1, nr2, nr3, nr4, nr5) {
    const average = ((nr1 + nr2 + nr3 + nr4 + nr5) / CalculatingAverage.length)
    return average
}

const average = CalculatingAverage(1, 2, 10, 2, 1)
console.log(average)
console.log("Or rounded: " + Math.round(average))

// This is a produce function