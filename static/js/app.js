// from data.js
var tableData = data;

// YOUR CODE HERE!
// from data.js
var tableData = data;

// select the button
var button = d3.select('#filter-btn');

button.on('click', function(){

// Select the input element and get the raw HTML node
var inputElement_datetime = d3.select("#datetime");
var inputElement_city = d3.select("#city");
var inputElement_state = d3.select("#state");
var inputElement_country = d3.select("#country");
var inputElement_shape = d3.select("#shape");

// Get the value property of the input element
var inputValue_datetime = inputElement_datetime.property('value');
var inputValue_city = inputElement_city.property('value');
var inputValue_state = inputElement_state.property('value');
var inputValue_country= inputElement_country.property('value');
var inputValue_shape= inputElement_shape.property('value');

  var filteredData = tableData.filter(sightings => (inputValue_datetime === "" || sightings.datetime === inputValue_datetime) && (inputValue_country ==="" || sightings.country === inputValue_country) && (inputValue_city === "" || sightings.city === inputValue_city) && (inputValue_state=== "" || sightings.state === inputValue_state) && (inputValue_shape=== "" || sightings.shape === inputValue_shape));
//}
//var filteredData = tableData.filter(sightings => sightings.datetime == inputValue_datetime );


  console.log(filteredData);

// Get a reference to the table body
var tbody = d3.select("tbody");
tbody.html("");
filteredData.forEach((datapoint) => {
  var row = tbody.append("tr");
  Object.entries(datapoint).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
  });
});

})
