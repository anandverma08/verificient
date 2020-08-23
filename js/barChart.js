var chartCanvas = document.getElementById("chartCanvas");

var mutualFund = {
    label: 'Mutual Fund',
    data: [8000, 12000, 9000, 15000, 12000, 14000],
    backgroundColor: 'rgba(0, 143, 251, 0.6)',
    yAxisID: "y-axis-density"
};
var equityFund = {
    label: 'Equity Fund',
    data: [1000, 2000, 3000, 4000, 2000, 2000],
    backgroundColor: 'rgba(255, 69, 95, 0.6)',
    yAxisID: "y-axis-density"
};

var taxSaver = {
    label: 'Tax Saver',
    data: [3700, 8900, 9800, 3700, 2310, 9000],
    backgroundColor: 'rgba(99, 132, 0, 0.6)',
    yAxisID: "y-axis-gravity"
};

var retirement = {
    label: 'Retirement',
    data: [15000, 10000, 9800, 31000, 20000, 7000],
    backgroundColor: 'rgba(170, 76, 25, 0.6)',
    yAxisID: "y-axis-gravity"
};


var investmentData = {
    labels: ["Feb", "Mar", "Apr", "May", "June", "July"],
    datasets: [mutualFund, equityFund, taxSaver, retirement]
};

var chartOptions = {
    scales: {
        xAxes: [{
            barPercentage: 1,
            categoryPercentage: 0.5
        }],
        yAxes: [{
            id: "y-axis-density"
        }, {
            id: "y-axis-gravity"
        }]
    }
};

var barChart = new Chart(chartCanvas, {
    type: 'bar',
    data: investmentData,
    options: chartOptions
});