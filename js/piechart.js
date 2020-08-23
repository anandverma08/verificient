var chart = new CanvasJS.Chart("chartContainer", {
	animationEnabled: true,
	title: {
		text: "Investment Distribution in last 6 months"
	},
	data: [{
		type: "pie",
		startAngle: 240,
		yValueFormatString: "##0.00\"%\"",
		indexLabel: "{label} {y}",
		dataPoints: [
			{y: 40., label: "Mutual Funds"},
			{y: 11, label: "Equity"},
			{y: 14, label: "Tax Saver"},
			{y: 35, label: "Rt. Plan"},
		]
	}]
});
chart.render();