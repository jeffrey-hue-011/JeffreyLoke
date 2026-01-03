const disneyData = [
	{
		open: "120.54",
		high: "122.56",
		low: "120.54",
		close: "121.09"
	},
	{
		open: "123.15",
		high: "127.76",
		low: "123.02",
		close: "124.92"
	}
];

// Write your code below
let totalClose = 0;
for (let i = 0; i < disneyData.length; i++) {
	totalClose += parseFloat(disneyData[i].close);
}
let averageClose = totalClose / disneyData.length;
console.log("Average closing price of Disney is " + (Math.round(averageClose * 100) / 100).toFixed(2));