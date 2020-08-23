
var chart = new CanvasJS.Chart("trendingChartContainer", {
	theme: "light2", 
	animationEnabled: true,
	title:{
		text: "Check how your most trusted fund is performing!"   
	},
	axisX: {
		interval: 1,
		intervalType: "month",
		valueFormatString: "MMM"
	},
	axisY:{
		title: "(In thousands)",
		includeZero: true,
		valueFormatString: "#0"
	},
	data: [{        
		type: "line",
		markerSize: 12,
		xValueFormatString: "MMM, YYYY",
		yValueFormatString: "###.#k",
		dataPoints: [        
			{ x: new Date(2019, 09, 1), y: 61, indexLabel: "gain", markerType: "triangle",  markerColor: "#6B8E23" },
			{ x: new Date(2019, 10, 1), y: 71, indexLabel: "gain", markerType: "triangle",  markerColor: "#6B8E23" },
			{ x: new Date(2019, 11, 1) , y: 55, indexLabel: "loss", markerType: "cross", markerColor: "tomato" },
			{ x: new Date(2019, 12, 1) , y: 50, indexLabel: "loss", markerType: "cross", markerColor: "tomato" },
			{ x: new Date(2020, 01, 1) , y: 65, indexLabel: "gain", markerType: "triangle", markerColor: "#6B8E23" },
			{ x: new Date(2020, 02, 1) , y: 85, indexLabel: "gain", markerType: "triangle", markerColor: "#6B8E23" },
			{ x: new Date(2020, 03, 1) , y: 68, indexLabel: "loss", markerType: "cross", markerColor: "tomato" },
			{ x: new Date(2020, 04, 1) , y: 28, indexLabel: "loss", markerType: "cross", markerColor: "tomato" },
			{ x: new Date(2020, 05, 1) , y: 34, indexLabel: "gain", markerType: "triangle", markerColor: "#6B8E23" },
			{ x: new Date(2020, 06, 1) , y: 24, indexLabel: "loss", markerType: "cross", markerColor: "tomato" },
			{ x: new Date(2020, 07, 1) , y: 44, indexLabel: "gain", markerType: "triangle", markerColor: "#6B8E23" }
		]
	}]
});
chart.render();


