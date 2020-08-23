var chart = new CanvasJS.Chart("comparisonChart", {
    title: {
        text: "My Performance VS Peers"
    },
    axisX: {
        valueFormatString: "MMM YYYY"
    },
    axisY2: {
        title: "Investment",
        prefix: "Rs.",
        suffix: ""
    },
    toolTip: {
        shared: true
    },
    legend: {
        cursor: "pointer",
        verticalAlign: "top",
        horizontalAlign: "center",
        dockInsidePlotArea: true
    },
    data: [
        {
            type: "line",
            axisYType: "secondary",
            name: "My Performance",
            showInLegend: true,
            markerSize: 0,
            yValueFormatString: "##,###",
            dataPoints: [
                { x: new Date(2019, 00, 01), y: 1400 },
                { x: new Date(2019, 01, 01), y: 1230 },
                { x: new Date(2019, 02, 01), y: 1110 },
                { x: new Date(2019, 03, 01), y: 1450 },
                { x: new Date(2019, 04, 01), y: 1620 },
                { x: new Date(2019, 05, 01), y: 1500 },
                { x: new Date(2019, 06, 01), y: 1122 },
                { x: new Date(2019, 07, 01), y: 1000 },
                { x: new Date(2019, 08, 01), y: 965 },
                { x: new Date(2019, 09, 01), y: 1142 },
                { x: new Date(2019, 10, 01), y: 1475 },
                { x: new Date(2019, 11, 01), y: 1650 },
                { x: new Date(2020, 00, 01), y: 1578 },
                { x: new Date(2020, 01, 01), y: 1321 },
                { x: new Date(2020, 02, 01), y: 1754 },
                { x: new Date(2020, 03, 01), y: 1700 },
                { x: new Date(2020, 04, 01), y: 1444 },
                { x: new Date(2020, 05, 01), y: 1362 },
                { x: new Date(2020, 06, 01), y: 1480 },
                { x: new Date(2020, 07, 01), y: 1785 },
                { x: new Date(2020, 08, 01), y: 1362 },
            ]
        },
        {
            type: "line",
            axisYType: "secondary",
            name: "Peers",
            showInLegend: true,
            markerSize: 0,
            yValueFormatString: "##,###",
            dataPoints: [
                { x: new Date(2019, 00, 01), y: 1600 },
                { x: new Date(2019, 01, 01), y: 1200 },
                { x: new Date(2019, 02, 01), y: 1190 },
                { x: new Date(2019, 03, 01), y: 1180 },
                { x: new Date(2019, 04, 01), y: 1250 },
                { x: new Date(2019, 05, 01), y: 1270 },
                { x: new Date(2019, 06, 01), y: 1300 },
                { x: new Date(2019, 07, 01), y: 1300 },
                { x: new Date(2019, 08, 01), y: 1358 },
                { x: new Date(2019, 09, 01), y: 1410 },
                { x: new Date(2019, 10, 01), y: 1480 },
                { x: new Date(2019, 11, 01), y: 1500 },
                { x: new Date(2020, 00, 01), y: 1500 },
                { x: new Date(2020, 01, 01), y: 1550 },
                { x: new Date(2020, 02, 01), y: 1550 },
                { x: new Date(2020, 03, 01), y: 1590 },
                { x: new Date(2020, 04, 01), y: 1600 },
                { x: new Date(2020, 05, 01), y: 1590 },
                { x: new Date(2020, 06, 01), y: 1590 },
                { x: new Date(2020, 07, 01), y: 1620 },
                { x: new Date(2020, 08, 01), y: 1670 }
            ]
        }
    ]
});
chart.render();