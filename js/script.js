
$(function(){
  
    $.ajax({
        url: "http://localhost:8888/php_chartJS/ontime.json",
        method: "GET",
        success: function(data) {
            console.log(data);
            let ontime = [];
            let score = [];

            for (let i in data) {
                ontime.push(data[i].ontimeId);
                score.push(data[i].score);
            }

            var chartdata = {
                labels: ontime,
                datasets : [

                    {
                        label: 'Ontime Service by month',
                        backgroundColor: 'rgba(255, 0, 255, 0.75)',
                        borderColor: 'rgba(255, 153, 255, 0.75)',
                        hoverBackgroundColor: 'rgba(200, 200, 200, 1)',
                        hoverBorderColor: 'rgba(200, 200, 200, 1)',
                        fill: '0',
                        data: score

                    }
                ]
            };

            let ctx = $("#mycanvas");

            var barGraph = new Chart(ctx, {
                type: 'line',
                data: chartdata
            });
        },
        error: function(data) {
            console.log(data);
            
        }
        
    });




});