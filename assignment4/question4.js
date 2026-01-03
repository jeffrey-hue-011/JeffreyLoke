const msftData = [
	[190.15, 196.21, 191.07, 194.44],
	[193.61, 195.89, 190.12, 193.40]
];

// Write your code below
let totalClose = 0;
for (let i = 0; i < msftData.length; i++) {
	totalClose += msftData[i][3];
}
let averageClose = totalClose / msftData.length;
console.log("Average closing price of MSFT is " + averageClose.toFixed(2));
