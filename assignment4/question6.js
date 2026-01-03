const amdPrices = [90.21, 89.15, 88.15, 87.12, 102.21, 100.12, 79.82];

// Write your code below
const sortedPrices = amdPrices.sort((a, b) => a - b);
const lowestThree = sortedPrices.slice(0, 3);

console.log(`The three lowest prices are ${lowestThree[0]}, ${lowestThree[1]}, and ${lowestThree[2]}`);
