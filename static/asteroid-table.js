console.log("asteroid-table.js");

function numberWithCommas(x) {
    x = x.toString();
    var pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(x))
        x = x.replace(pattern, "$1,$2");
    return x;
}

function init() {

    d3.select("#asteroidProfileTitle").text("ASTEROID PROFILE - ASTEROID:");
    d3.select("#milesTable").text("12,500 mi");
    d3.select("#velocityTable").text("2,000,000,000");
    d3.select("#magnitudeTable").text("2");
    d3.select("#kilometresTable").text("3");


    d3.json(`/api/asteroids_v1`).then(function(data) {
    
        var asteroidNames = data.map(asteroid => asteroid.name);
        var asteroidNames = asteroidNames.sort();
        
        //populate selection box with planet features to plot
        for (i in asteroidNames) {
            d3.select("#selAsteroid").append("option").attr("value", asteroidNames[i]).text(asteroidNames[i]);
        };

    });
};

function changeAsteroid() {

var selAsteroid = d3.select("#selAsteroid").property("value");

d3.json(`/api/asteroids_v1`).then(function(data) {

    var asteroidData = data.map(asteroid => asteroid);

    for (i in asteroidData) {
        
        if (asteroidData[i].name === selAsteroid) {

            d3.select("#asteroidProfileTitle").text(`ASTEROID PROFILE - ${asteroidData[i].name}`);
            d3.select("#milesTable").text(`${numberWithCommas(asteroidData[i].miss_distance_miles)} mi`);
            d3.select("#velocityTable").text(`${numberWithCommas(asteroidData[i].velocity_mph)}`);
            d3.select("#magnitudeTable").text(`${asteroidData[i].magnitude}`);
            d3.select("#kilometresTable").text(`${asteroidData[i].miss_distance_km}`);
        }

    }

});
};


init();