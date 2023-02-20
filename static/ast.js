d3.json(`/api/asteroids_v1`).then((data) => {
    console.log(data)
});

function init() {

    // Dropdown menu
    let dropdownMenu = d3.select("#selDataset");

    d3.json(`/api/asteroids_v1`).then((data) => {

        var totalAsteroids = (Object.keys(data).length);
        console.log(totalAsteroids)
        var sortedByVelocity = data.sort((a, b) => b.velocity_mph - a.velocity_mph);
        var slicedTopFive = sortedByVelocity.slice(0, 5);
        var reversedTopFive = slicedTopFive.reverse();

        var trace1 = {
            x: data.map(asteroid => asteroid.velocity_mph),
            y: data.map(asteroid => asteroid.name),
            type: "bar",
            orientatio: "h"
        };

        var traceData = [trace1];

        var layout = {
            title: "Top 5 Fastest Asteroids By Velocity MPH",
            height: 600,
            margin: {
                l: 100,
                r: 100,
                t: 75,
                b: 75
              }
        };

        Plotly.newPlot("bar", traceData, layout);

    });

}
init()