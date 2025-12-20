const aaplDailyOHLC = [
	[75.62, 74.14, 78.52, 80.21],
	[80.21, 81.21, 79.89, 80.78]
];
for(let i = 0; i < aaplDailyOHLC.length; i++) {
	console.log("Inner Array: ", aaplDailyOHLC[i])
	console.log("Open: ",        aaplDailyOHLC[i][0]) // We are using index numbers to access items in each nested array
	console.log("High: ",        aaplDailyOHLC[i][1])
	console.log("Low: ",         aaplDailyOHLC[i][2])
	console.log("Close: ",       aaplDailyOHLC[i][3])
}asdf