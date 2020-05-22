
$(function(){
  
    $.ajax({
        url: "http://localhost:8888/php_chartJS/ontime.json",
        method: "GET",
        success: function(data) {
            console.log(data);
            let ontimeId= [];
            let score2019 = [];
            let score2020 = [];

            for (let i in data) {
                ontimeId.push(data[i].ontimeId);
                score2019.push(data[i].score2019);
                score2020.push(data[i].score2020);
            }

            var chartdata = {
                labels: ontimeId,
                datasets : [

                    {
                        label: 'Ontime Service 2019',
                        fill: false,
                        lineTension: 0.1,
                        backgroundColor: 'rgba(255, 0, 0, 0.75)',
                        borderColor: 'rgba(255, 0, 0, 0.75)',
                        pointHoverBackgroundColor: 'rgba(200, 200, 200, 1)',
                        pointHoverBorderColor: 'rgba(200, 200, 200, 1)',
                        data: score2019

                    }, {
                        label: 'Ontime Service 2020',
                        fill: false,
                        lineTension: 0.1,
                        backgroundColor: 'rgba(102, 102, 255, 0.75)',
                        borderColor: 'rgba(102, 102, 255, 0.75)',
                        pointHoverBackgroundColor: 'rgba(200, 200, 200, 1)',
                        pointHoverBorderColor: 'rgba(200, 200, 200, 1)',
                        data: score2020

                    }, 

                ]
            };

            let ctx = $("#mycanvas");

            var LineGraph = new Chart(ctx, {
                type: 'line',
                data: chartdata
            });
        },
        error: function(data) {
            console.log(data);
            
        }
        
    });




});