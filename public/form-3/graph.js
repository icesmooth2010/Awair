// father forgive me for i have sinned
var badGlobalArrayYesterday = [];
var badGlobalArrayLastWeek = [];
var badGlobalArrayLastMonth = [];

$.ajax({
    url: "http://localhost:7000/api/reading",
    method: "GET"
}).then(function (response) {

    //====================================================================
    //average for yesterday's values
    //====================================================================
    var avgYesterdayPM1 = averageYesterday(response, "PM1");
    var avgYesterdayPM25 = averageYesterday(response, "PM25");
    var avgYesterdayPM10 = averageYesterday(response, "PM10");
    var avgYesterdayTemp = averageYesterday(response, "Temp");
    var avgYesterdayHum = averageYesterday(response, "Hum");
    //removed CO because it was throwing off scale
    // var cavgYesterdayCO = averageYesterday(response, "CO");
    var avgYesterdayNO = averageYesterday(response, "NO");

    //function to create graph for yesterday's data
    averageYesterdayGraph(avgYesterdayPM1, avgYesterdayPM25, avgLastWeek10, avgLastWeekTemp, avgLastWeekHum, avgLastWeekNO);



    //====================================================================
    //average for last week's values
    //====================================================================
    var avgLastWeekPM1 = averageLastWeek(response, "PM1");
    var avgLastWeekPM25 = averageLastWeek(response, "PM25");
    var avgLastWeek10 = averageLastWeek(response, "PM10");
    var avgLastWeekTemp = averageLastWeek(response, "Temp");
    var avgLastWeekHum = averageLastWeek(response, "Hum");
    //removed CO because it was throwing off scale
    // var avgLastWeekCO = averageLastWeek(response, "CO");
    var avgLastWeekNO = averageLastWeek(response, "NO");

    //function to create graph for last week's data
    averageLastWeekGraph(avgLastWeekPM1, avgLastWeekPM25, avgLastWeek10, avgLastWeekTemp, avgLastWeekHum, avgLastWeekNO)




    //====================================================================
    //average for last month's values
    //====================================================================
    var avgLastMonthPM1 = averageLastMonth(response, "PM1");
    var avgLastMonthPM25 = averageLastMonth(response, "PM25");
    var avgLastMonthPM10 = averageLastMonth(response, "PM10");
    var avgLastMonthTemp = averageLastMonth(response, "Temp");
    var avgLastMonthHum = averageLastMonth(response, "Hum");
    //removed CO because it was throwing off scale
    // var avgLastMonthCO = averageLastMonth(response, "CO");
    var avgLastMonthNO = averageLastMonth(response, "NO");
    
    //function to create graph for last month's data
    averageLastMonthGraph(avgLastMonthPM1, avgLastMonthPM25, avgLastMonthPM10, avgLastMonthTemp, avgLastMonthHum, avgLastMonthNO);
});

//Function to round numbers to 3 decimal places. It requires 2 variables, the number (number) and how many decimal places you wish to round to (precision)
function round(number, precision) {
    var shift = function (number, precision) {
        var numArray = ("" + number).split("e");
        return +(numArray[0] + "e" + (numArray[1] ? (+numArray[1] + precision) : precision));
    };
    return shift(Math.round(shift(number, +precision)), -precision);
}


//Function that will get the averages for the 7 tracked values from yesterday
function averageYesterday(response, value) {

    // today's date
    let yesterday = new Date('2018-05-11');

    let N = 0; // how many days to average over
    let avgYesterdayValue = 0;
    for (let i = 0; i < response.length; i++) {
        // create date object for this reponse
        var date = new Date(response[i].Date);

        // if this response has data from yesterday, then sum
        if (date.getTime() === yesterday.getTime()) {
            avgYesterdayValue += response[i][value];
            N += 1;
        }
    }
    badGlobalArrayYesterday.push(avgYesterdayValue / N);
    return avgYesterdayValue / N;
}


//Function that will get the averages for the 7 tracked values for the past week
function averageLastWeek(response, value) {

    // starting and ending dates for week range
    let lastWeekStartDate = new Date('2018-05-04');
    let lastWeekEndDate = new Date('2018-05-11');

    let N = 0; // how many days to average over
    let avgYesterdayValue = 0;
    for (let i = 0; i < response.length; i++) {
        // create date object for this reponse
        var date = new Date(response[i].Date);

        // if this response has data from yesterday, then sum
        if (date.getTime() >= lastWeekStartDate.getTime() || date.getTime() <= lastWeekEndDate) {
            avgYesterdayValue += response[i][value];
            N += 1;
        }
    }
    return avgYesterdayValue / N;
}


//Function that will get the averages for the 7 tracked values for the past week
function averageLastMonth(response, value) {

    // starting and ending dates for week range
    let lastMonthStartDate = new Date('2018-04-11');
    let lastMonthEndDate = new Date('2018-05-11');

    let N = 0; // how many days to average over
    let avgYesterdayValue = 0;
    for (let i = 0; i < response.length; i++) {
        // create date object for this reponse
        var date = new Date(response[i].Date);

        // if this response has data from yesterday, then sum
        if (date.getTime() >= lastMonthStartDate.getTime() || date.getTime() <= lastMonthEndDate) {
            avgYesterdayValue += response[i][value];
            N += 1;
        }
    }
    return avgYesterdayValue / N;
}





//function for rendering average yesterday graph
function averageYesterdayGraph(avgYesterdayPM1, avgYesterdayPM25, avgYesterdayPM10, avgYesterdayTemp, avgYesterdayHum, avgYesterdayNO) {
    var canvas = document.getElementById("myChart");
    var myChart = new Chart(canvas, {
        type: 'bar',
        data: {
            labels: ["PM 1", "PM 2.5", "PM 10", "Temperature", "Humidity", "Nitric Oxide"],
            datasets: [{
                label: 'Average Air Quality for Yesterday in Your Home',
                data: badGlobalArrayYesterday,
                backgroundColor: [
                    //PM1
                    'rgba(0, 0, 255, 0.2)',
                    //PM2.5
                    'rgba(1, 1, 1, 0.2)',
                    //PM10
                    'rgba(63, 29, 11, 0.2)',
                    //Temp
                    'rgba(120, 12, 0, 0.2)',
                    //Hum
                    'rgba(18, 53, 162, 0.2)',
                    //CO
                    // 'rgba(67, 63, 64, 0.2)',
                    //NO
                    'rgba(70, 0, 0, 0.2)'
                ],
                hoverBackgroundColor: [
                    //PM1
                    'rgba(0, 0, 255, 0.5)',
                    //PM2.5
                    'rgba(1, 1, 1, 0.5)',
                    //PM10
                    'rgba(63, 29, 11, 0.5)',
                    //Temp
                    'rgba(120, 12, 0, 0.5)',
                    //Hum
                    'rgba(18, 53, 162, 0.5)',
                    //CO
                    // 'rgba(67, 63, 64, 0.5)',
                    //NO
                    'rgba(70, 0, 0, 0.5)'
                ],
                borderColor: [
                    //PM1
                    'rgba(0, 0, 255, 1)',
                    //PM2.5
                    'rgba(1, 1, 1, 1)',
                    //PM10
                    'rgba(63, 29, 11, 1)',
                    //Temp
                    'rgba(120, 12, 0, 1)',
                    //Hum
                    'rgba(18, 53, 162, 1)',
                    //CO
                    // 'rgba(67, 63, 64, 1)',
                    //NO
                    'rgba(70, 0, 0, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            tooltips: {
                callbacks: {
                    title: function (tooltipItem, data) {
                        return data['labels'][tooltipItem[0]['index']];
                    },
                    label: function (tooltipItem, data) {
                        return data['datasets'][0]['data'][tooltipItem['index']];
                    }
                }
            },
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            },
            responsive: false
        }
    });

}

function averageLastWeekGraph(avgLastWeekPM1, avgLastWeekPM25, avgLastWeek10, avgLastWeekTemp, avgLastWeekHum, avgLastWeekNO) {
    var canvas = document.getElementById("myChart2");
    var myChart = new Chart(canvas, {
        type: 'bar',
        data: {
            labels: ["PM 1", "PM 2.5", "PM 10", "Temperature", "Humidity", "Nitric Oxide"],
            datasets: [{
                label: 'Average Air Quality for Last Week in Your Home',
                data: badGlobalArrayLastWeek,
                backgroundColor: [
                    //PM1
                    'rgba(0, 0, 255, 0.2)',
                    //PM2.5
                    'rgba(1, 1, 1, 0.2)',
                    //PM10
                    'rgba(63, 29, 11, 0.2)',
                    //Temp
                    'rgba(120, 12, 0, 0.2)',
                    //Hum
                    'rgba(18, 53, 162, 0.2)',
                    //CO
                    // 'rgba(67, 63, 64, 0.2)',
                    //NO
                    'rgba(70, 0, 0, 0.2)'
                ],
                hoverBackgroundColor: [
                    //PM1
                    'rgba(0, 0, 255, 0.5)',
                    //PM2.5
                    'rgba(1, 1, 1, 0.5)',
                    //PM10
                    'rgba(63, 29, 11, 0.5)',
                    //Temp
                    'rgba(120, 12, 0, 0.5)',
                    //Hum
                    'rgba(18, 53, 162, 0.5)',
                    //CO
                    // 'rgba(67, 63, 64, 0.5)',
                    //NO
                    'rgba(70, 0, 0, 0.5)'
                ],
                borderColor: [
                    //PM1
                    'rgba(0, 0, 255, 1)',
                    //PM2.5
                    'rgba(1, 1, 1, 1)',
                    //PM10
                    'rgba(63, 29, 11, 1)',
                    //Temp
                    'rgba(120, 12, 0, 1)',
                    //Hum
                    'rgba(18, 53, 162, 1)',
                    //CO
                    // 'rgba(67, 63, 64, 1)',
                    //NO
                    'rgba(70, 0, 0, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            tooltips: {
                callbacks: {
                    title: function (tooltipItem, data) {
                        return data['labels'][tooltipItem[0]['index']];
                    },
                    label: function (tooltipItem, data) {
                        return data['datasets'][0]['data'][tooltipItem['index']];
                    }
                }
            },
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            },
            responsive: false
        }
    });

}


function averageLastMonthGraph(avgLastMonthPM1, avgLastMonthPM25, avgLastMonthPM10, avgLastMonthTemp, avgLastMonthHum, avgLastMonthNO) {
    var canvas = document.getElementById("myChart3");
    var myChart = new Chart(canvas, {
        type: 'bar',
        data: {
            labels: ["PM 1", "PM 2.5", "PM 10", "Temperature", "Humidity", "Nitric Oxide"],
            datasets: [{
                label: 'Average Air Quality for Last Month in Your Home',
                data: badGlobalArrayLastMonth,
                backgroundColor: [
                    //PM1
                    'rgba(0, 0, 255, 0.2)',
                    //PM2.5
                    'rgba(1, 1, 1, 0.2)',
                    //PM10
                    'rgba(63, 29, 11, 0.2)',
                    //Temp
                    'rgba(120, 12, 0, 0.2)',
                    //Hum
                    'rgba(18, 53, 162, 0.2)',
                    //CO
                    // 'rgba(67, 63, 64, 0.2)',
                    //NO
                    'rgba(70, 0, 0, 0.2)'
                ],
                hoverBackgroundColor: [
                    //PM1
                    'rgba(0, 0, 255, 0.5)',
                    //PM2.5
                    'rgba(1, 1, 1, 0.5)',
                    //PM10
                    'rgba(63, 29, 11, 0.5)',
                    //Temp
                    'rgba(120, 12, 0, 0.5)',
                    //Hum
                    'rgba(18, 53, 162, 0.5)',
                    //CO
                    // 'rgba(67, 63, 64, 0.5)',
                    //NO
                    'rgba(70, 0, 0, 0.5)'
                ],
                borderColor: [
                    //PM1
                    'rgba(0, 0, 255, 1)',
                    //PM2.5
                    'rgba(1, 1, 1, 1)',
                    //PM10
                    'rgba(63, 29, 11, 1)',
                    //Temp
                    'rgba(120, 12, 0, 1)',
                    //Hum
                    'rgba(18, 53, 162, 1)',
                    //CO
                    // 'rgba(67, 63, 64, 1)',
                    //NO
                    'rgba(70, 0, 0, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            tooltips: {
                callbacks: {
                    title: function (tooltipItem, data) {
                        return data['labels'][tooltipItem[0]['index']];
                    },
                    label: function (tooltipItem, data) {
                        return data['datasets'][0]['data'][tooltipItem['index']];
                    }
                }
            },
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            },
            responsive: false
        }
    });

}
