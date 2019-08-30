// from data.js
var tableData = data;

// YOUR CODE HERE!
// from data.js
var tableData = data;

// select the button
var button = d3.select('#filter-btn');

button.on('click', function(){

// Select the input element and get the raw HTML node
var inputElement = d3.select("#datetime");

// Get the value property of the input element
var inputValue = inputElement.property('value');

// console.log(`user enter ${inputValue}`);
// console.log(tableData);

var filteredData = tableData.filter(sightings => sightings.datetime === inputValue);

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

