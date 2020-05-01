// Creating map object
var myMap = L.map("map", {
  center: [15.5994, -28.6731],
  zoom: 5
});

// Adding tile layer
L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.streets",
  accessToken: API_KEY
}).addTo(myMap);

// Load in geojson data
var geoData = '../static/data/world_map_rank.geojson';
// var geoData = '/data'

// getJSON("static/data/world_map_rank.geojson", function(json) {
//   console.log(json);
// });

// getJSON(); 

var geojson;
var countryshapes
// Grab data with d3
// This takes the geojson file and turns in into a list of dictionaries
// recreate what you did in pandas here.
d3.json(geoData, function(data) {
  countryshapes = data 
  plotting(countryshapes)
});
  // first step reading in the geojson
  // second step update the data from within Marcio's results

  // make everything below it's own function to reference in the countryshapes function.
function plotting(d){// console.log(data)  // Create a new choropleth layer
  geojson = L.choropleth(d, {

    // Define what  property in the features to use
    valueProperty: "overall_rank",

    // Set color scale
    scale: ["#7B68EE", "#ADFF2F"],

    // Number of breaks in step range
    steps: 10,

    // q for quartile, e for equidistant, k for k-means
    mode: "q",
    style: {
      // Border color
      color: "#fff",
      weight: 1,
      fillOpacity: 0.8
    },

    // Binding a pop-up to each layer
    onEachFeature: function(feature, layer) {
      layer.bindPopup("Country Name: " + feature.properties.admin + "<br>Our Happiness Score:<br>"
        + feature.properties.overall_rank);
    }
  }).addTo(myMap);}

  // Set up the legend
  // var legend = L.control({ position: "bottomright" });
  // legend.onAdd = function() {
  //   var div = L.DomUtil.create("div", "info legend");
  //   var limits = geojson.options.limits;
  //   var colors = geojson.options.colors;
  //   var labels = [];

  //   // Add min & max
  //   var legendInfo = "<h1>Median Income</h1>" +
  //     "<div class=\"labels\">" +
  //       "<div class=\"min\">" + limits[0] + "</div>" +
  //       "<div class=\"max\">" + limits[limits.length - 1] + "</div>" +
  //     "</div>";

  //   div.innerHTML = legendInfo;

  //   limits.forEach(function(limit, index) {
  //     labels.push("<li style=\"background-color: " + colors[index] + "\"></li>");
  //   });

  //   div.innerHTML += "<ul>" + labels.join("") + "</ul>";
  //   return div;
  // };

  // // Adding legend to the map
  // legend.addTo(myMap);

//  Below you will find notes and commented out code from the previous non-static attempts

// getJSON("static/data/world_map_rank.geojson", function(json) {
//   console.log(json);
// });
// var geojson;
// var countryshapes;
// var user_rankings = dataset
// // getJSON(); 
// d3.json(geoData, function(data) {
//   countryshape = data
// });

// Grab data with d3
// This takes the geojson file and turns in into a list of dictionaries
// recreate what you did in pandas here.
// Structure Sarah recommends Marcio's score has it be output in a dict where values are scores and countries are keys
// for ( var i = 0; i < countryshape['features'].length; i ++){
//     countryshape['features'][i]['properties']['user_rank'] = dataset['user_rank'][countryshape['features'][i]['properties']['admin']]
    // except KeyError:
        // if:
        //     x['properties']['overall_rank'] = "/api/v1.0/happyness_index"[x['properties']['name_sort']]
        //  If i fix North & South Korea I don't need the lines
            // except KeyError:
        //     try:
        //         x['properties']['overall_rank'] = "/api/v1.0/happyness_index"[x['properties']['name']]
        //     except KeyError:
        //         try:
        //             country = x['properties']['admin']
        //             if country == 'North Korea':
        //                 x['properties']['overall_rank'] = "/api/v1.0/happyness_index"['Korea, North']
        //                 continue
        //             if country == 'South Korea':
        //                 x['properties']['overall_rank'] = happiness_dict['Korea, South']
        //                 continue
        //             x['properties']['overall_rank'] = happiness_dict[country]
                // except:
                //     print(country)
                //     x['properties']['overall_rank'] = "NA"}


// first step reading in the geojson
// second step update the data from within Marcio's results

// make everything below it's own function to reference in the countryshapes function.
// Here is what I'm calling my function below.
// function choro_layer (ask alice if I put the console.log in here or if i can just put like 64)

