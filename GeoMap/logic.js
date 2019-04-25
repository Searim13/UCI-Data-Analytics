var myMap = L.map("map", {
  center: [40, -110],
  zoom: 5
});

L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.streets-basic",
  accessToken: "pk.eyJ1Ijoic2VhcmltMTMiLCJhIjoiY2pzd2w5aWZyMGoybTQ0cHAyamQwcjF4YiJ9.ITP31Sb3f8EZSLfmpP5sFw"
}).addTo(myMap);

d3.json("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_month.geojson").then(function(data) {
  var data = data["features"];
  console.log(data);
  //loops through data to create colored circles based off magnitude
  for (var i = 0; i < data.length; i++) {
    var mag = data[i]["properties"]["mag"];
    var color = "";
    var coordinates = data[i]['geometry']['coordinates'];
    var place = data[i]["properties"]["place"];

    if (mag < 3) {
      color = "Green";
    }else if (mag < 3.5) {
      color = "GreenYellow";
    }
    else if (mag < 4) {
      color = "Yellow";
    }
    else if (mag < 4.5) {
      color = "Orange";
    }
    else if (mag < 5) {
      color = "OrangeRed";
    }
    else if (mag < 10) {
      color = "Red";
    }
    L.circle([coordinates[1], coordinates[0]], {fillColor: color, color: color, fillOpacity: 0.8, radius: mag * 15000})
      .bindPopup(`<center><h2>Location:<br>${place}<hr>Magnitude:<br>${mag}</h2></center>`).addTo(myMap)
  }
});