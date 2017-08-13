import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';
import {Chart} from 'chart.js'

import './discards.html';

Template.discards.onCreated(function(){
  this.autorun(() => {
    this.subscribe('players');
    this.subscribe('allDiscards');
  });
});

Template.discards.helpers ({
  allDiscards: function(){
      return Discards.find({}, {sort: {"value": -1}});
  }
});

Template.discards.rendered = function() {
  Meteor.call('discardList', function (err, result) {
    if (err){
      console.log(err);
    } else {
      var labels = result.map(function(item) {
        return item._id;
      });

      var values = result.map(function(item) {
        return item.count;
      });

      var ctx = document.getElementById("discardsByPlayer").getContext('2d');
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
              'rgba(255, 159, 64, 0.2)',
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

  Meteor.call('discardsByValue', function (err, result) {
    if (err){
      console.log(err);
    } else {
      var labels = result.map(function(item) {
        return item._id;
      });

      var values = result.map(function(item) {
        return item.valueSum;
      });
      console.log(labels);
      console.log(values);
      var ctx = document.getElementById("discardsByValue").getContext('2d');
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
              'rgba(255, 159, 64, 0.2)',
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
                fontFamily: "'Open Sans', sans-serif",
                fontSize: 12,
                fontStyle: "bold",
                fontColor: "#545454",
              }
            }]
          }
        }
      });
    }
  });
};
