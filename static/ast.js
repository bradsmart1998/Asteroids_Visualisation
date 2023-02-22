console.log("Hi!");

d3.json(`/api/asteroids_v1`).then((data) => {
    console.log(data);
});


var plot_options = [{"By Miss Distance (Miles)":"miss_distance_miles"},
                    {"By Velocity(mph)":"velocity_mph"},
                    {"By Magnitude":"magnitude"},
                    {"By Miss Distance (KM)":"miss_distance_km"}];

for (i in plot_options) {
  d3.select("#selOption").append("option").attr("value", Object.values(plot_options[i])).text(Object.keys(plot_options[i]));
 };

var plot_sorting = [{"The Top 5 Asteroids":5},
                    {"The Top 10 Asteroids":10},
                    {"The Bottom 5 Asteroids":-5},
                    {"The Bottom 10 Asteroids":-10}]

for (i in plot_sorting) {
  d3.select("#selSorting").append("option").attr("value", Object.values(plot_sorting[i])).text(Object.keys(plot_sorting[i]));
 };


function init() {

    d3.json(`/api/asteroids_v1`).then((data) => {

        
        let sortedByVelocity = data.sort((a, b) => b.miss_distance_miles - a.miss_distance_miles);
        let slicedTopFive = sortedByVelocity.slice(0,5);
        let reversedTopFive = slicedTopFive.reverse();

        let trace1 = {
            x: reversedTopFive.map(asteroid => asteroid.miss_distance_miles),
            y: reversedTopFive.map(asteroid => asteroid.name),
            text: reversedTopFive.map(asteroid => asteroid.name),
            type: "bar",
            orientation: "h"
        };

        let traceData = [trace1];

        let layout = {
            title: "Top 5 Fastest Asteroids By Velocity MPH",
            height: 600,
            margin: {
                l: 100,
                r: 100,
                t: 100,
                b: 100
              }
        };

        Plotly.newPlot("hbar-plot", traceData, layout);

    });

};

d3.selectAll("#selSorting").on("change", updatePlotly);
d3.selectAll("#selOption").on("change", updatePlotly);

function updatePlotly() {

    var selSortingVal = d3.select("#selSorting").property("value");
    var selOptionVal = d3.select("#selOption").property("value");
    
    if (selSortingVal > 0) {
      var sliceBy = d3.select("#selSorting").property("value")*1;
      var descending = true;
      }
      else {
        var sliceBy = d3.select("#selSorting").property("value")*-1;
        var descending = false;
      };
    
    d3.json(`/api/asteroids_v1`).then(function(data) {
  
      if (descending === true) {
        if (selOptionVal === 'miss_distance_miles') {
          var sortedAsteroids = data.sort((a, b) => b.miss_distance_miles - a.miss_distance_miles);
          var slicedData = sortedAsteroids.slice(0, sliceBy);
          var reversedData = slicedData.reverse();
          var x = reversedData.map(asteroid => asteroid.miss_distance_miles);
          var y = reversedData.map(asteroid => asteroid.name);
          var text = reversedData.map(asteroid => asteroid.name);
          var text_title = `Top ${sliceBy} Asteroids by Miss Distance (miles)`;
        }
        else if (selOptionVal === 'velocity_mph') {
          var sortedAsteroids = data.sort((a, b) => b.velocity_mph - a.velocity_mph);
          var slicedData = sortedAsteroids.slice(0, sliceBy);
          var reversedData = slicedData.reverse();
          var x = reversedData.map(asteroid => asteroid.velocity_mph);
          var y = reversedData.map(asteroid => asteroid.name);
          var text = reversedData.map(asteroid => asteroid.name);
          var text_title = `Top ${sliceBy} Asteroids by Velocity (MPH)`;
        }
        else if (selOptionVal === 'magnitude') {
          var sortedAsteroids = data.sort((a, b) => b.magnitude - a.magnitude);
          var slicedData = sortedAsteroids.slice(0, sliceBy);
          var reversedData = slicedData.reverse();
          var x = reversedData.map(asteroid => asteroid.magnitude);
          var y = reversedData.map(asteroid => asteroid.name);
          var text = reversedData.map(asteroid => asteroid.name);
          var text_title = `Top ${sliceBy} Asteroids by Magnitude`;
        }
        else if (selOptionVal === 'miss_distance_km') {
          var sortedAsteroids = data.sort((a, b) => b.miss_distance_km - a.miss_distance_km);
          var slicedData = sortedAsteroids.slice(0, sliceBy);
          var reversedData = slicedData.reverse();
          var x = reversedData.map(asteroid => asteroid.miss_distance_km);
          var y = reversedData.map(asteroid => asteroid.name);
          var text = reversedData.map(asteroid => asteroid.name);
          var text_title = `Top ${sliceBy} Asteroids by Miss Distance (KM)`;
        }
      }
      else {
        if (selOptionVal === 'miss_distance_miles') {
          var sortedAsteroids = data.sort((a, b) => a.miss_distance_miles - b.miss_distance_miles);
          var slicedData = sortedAsteroids.slice(0, sliceBy);
          var reversedData = slicedData;
          var x = reversedData.map(asteroid => asteroid.miss_distance_miles);
          var y = reversedData.map(asteroid => asteroid.name);
          var text = reversedData.map(asteroid => asteroid.name);
          var text_title = `Bottom ${sliceBy} Asteroids by Miss Distance (miles)`;
        }
        else if (selOptionVal === 'velocity_mph') {
          var sortedAsteroids = data.sort((a, b) => a.velocity_mph - b.velocity_mph);
          var slicedData = sortedAsteroids.slice(0, sliceBy);
          var reversedData = slicedData;
          var x = reversedData.map(asteroid => asteroid.velocity_mph);
          var y = reversedData.map(asteroid => asteroid.name);
          var text = reversedData.map(asteroid => asteroid.name);
          var text_title = `Bottom ${sliceBy} Asteroids by Velocity (MPH)`;
        }
        else if (selOptionVal === 'magnitude') {
          var sortedAsteroids = data.sort((a, b) => a.magnitude - b.magnitude);
          var slicedData = sortedAsteroids.slice(0, sliceBy);
          var reversedData = slicedData;
          var x = reversedData.map(asteroid => asteroid.magnitude);
          var y = reversedData.map(asteroid => asteroid.name);
          var text = reversedData.map(asteroid => asteroid.name);
          var text_title = `Bottom ${sliceBy} Asteroids by Magnitude`;
        }
        else if (selOptionVal === 'miss_distance_km') {
          var sortedAsteroids = data.sort((a, b) => a.miss_distance_km - b.miss_distance_km);
          var slicedData = sortedAsteroids.slice(0, sliceBy);
          var reversedData = slicedData;
          var x = reversedData.map(asteroid => asteroid.miss_distance_km);
          var y = reversedData.map(asteroid => asteroid.name);
          var text = reversedData.map(asteroid => asteroid.name);
          var text_title = `Bottom ${sliceBy} Asteroids by Miss Distance (KM)`;
        }
      }
  
      Plotly.restyle("hbar-plot", "x", [x]);
      Plotly.restyle("hbar-plot", "y", [y]);
      Plotly.restyle("hbar-plot", "text", [text]);
      Plotly.relayout("hbar-plot", "title", text_title);
    });
  
  };
  function changeSorting(){
    console.log("changeSorting()");
  };
  
  function changeOption(){
    console.log("changeOption()");
  };
  
  d3.json(`/api/asteroids_v2`).then((data) => {
    console.log(data);
    //get the pie chart canvas
    // var ctx1 = $("#pie-chartcanvas-1");
    // var ctx1 = d3.select("#pie-chartcanvas-1")
    console.log(data[0]["count"])
  
    //pie chart data
    var data1 = {
      labels: [data[1]["hazardous"], data[0]["hazardous"]],
      datasets: [
        {
          data: [data[1]["count"], data[0]["count"]],
          backgroundColor: [
            "#DEB887",
            "#A9A9A9",
            "#DC143C",
            "#F4A460",
            "#2E8B57"
          ],
          borderColor: [
            "#CDA776",
            "#989898",
            "#CB252B",
            "#E39371",
            "#1D7A46"
          ],
          borderWidth: [4, 4]
        }
      ]
    };
  
    //options
    var options = {
      responsive: true,
      title: {
        display: true,
        position: "top",
        text: "Potentially Hazardous?",
        fontSize: 18,
        fontColor: "#111"
      },
      legend: {
        display: true,
        position: "bottom",
        labels: {
          fontColor: "#333",
          fontSize: 16
        }
      }
    };
  
    //create Chart class object
    var chart1 = new Chart(document.getElementById("pie-chartcanvas-1")
    , {
      type: "pie",
      data: data1,
      options: options
    });

});
  
  
  
  
  init();