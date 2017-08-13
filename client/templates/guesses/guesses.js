Template.guesses.onCreated(function(){
	this.autorun(() => {
	});
});

var topGivenCards;

Template.guesses.helpers ({
  topGivenCards: function(){
    return Session.get('topGivenCards')
  }
});

Template.guesses.rendered = function() {

  Meteor.call('topGivenCards', function (err, result) {
    if (err){
      console.log(err);
    } else {
      Session.set('topGivenCards', result);
    }
  });

  Meteor.call('guessesByPlayer', function (err, result) {
    if (err){
      console.log(err);
    } else {
      var labels = [];
      var values = [];
      for (var key in result) {
        labels.push(result[key]["name"]);
        values.push(result[key]["guesses"]);
      }


      var ctx = document.getElementById("guessesByPlayer").getContext('2d');
      var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: labels,
          datasets: [{
            data: values,
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
              'rgba(0, 254, 254, 0.2)',
              'rgba(255, 64, 255, 0.2)'
            ],
            borderColor: [
              'rgba(255,99,132,1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
              'rgba(0, 254, 254, 0.2)',
              'rgba(255, 64, 255, 0.2)'
            ],
            borderWidth: 1
          }]
        },
        options: {
          legend: {
            display: false
          },
          scales: {
            xAxes: [{
              gridLines: {
                display: false,
                color: "#CCC8BC",
                drawTicks: true,
              },
              ticks: {
                fontFamily: "'Open Sans', sans-serif",
                fontSize: 12,
                fontStyle: "bold",
                fontColor: "#545454"
              }
            }],
            yAxes: [{
              gridLines: {
                display: true
              },
              ticks: {
                beginAtZero:true,
                stepSize: 1,
                fontFamily: "'Open Sans', sans-serif",
                fontSize: 12,
                fontStyle: "bold",
                fontColor: "#545454",
              }
            }]
          }
        }
      });
    };
  });
};
