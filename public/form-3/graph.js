console.log("loaded");


var canvas = document.getElementById("myChart");
var myChart = new Chart(canvas, {
    type: 'bar',
    data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [{
            label: '# of bear sharks',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        },
        responsive: false
    }
});

var canvas = document.getElementById("myChart2");
var data ={
    labels:["Jan", "Feb", "Mar", "Apr", "may", "Jun", "Jul"],
    datasets: [
        {
            label: "My First Dataset",
            backgroundColor: "rgba(255,99,132,0.2)",
            borderColor: "rgba(255,99,132,1)",
            borderWidth: 5,
            hoverBackgroundColor: "rgba(255,99,132,0.4)",
            hoverBorderColor: "rgba(255,99,132,1)",
            data: [65, 59,80,81,56,55,40],
        }
    ]
};

var myBarChart = Chart.Bar(canvas,{
    data:data,
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        },
        responsive: false
    }
});