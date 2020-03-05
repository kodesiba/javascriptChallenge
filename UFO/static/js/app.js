// create source data variable and variables for dropdowns
var tableData = data;
var cities = tableData.map(data => data.city);
var states = tableData.map(data => data.state);
var countries =  tableData.map(data => data.country);
var shapes =  tableData.map(data => data.shape);

function makeUnique(value, index, self) { 
    return self.indexOf(value) === index;
}

var uniqueCities = cities.filter(makeUnique)
var uniqueStates = states.filter(makeUnique)
var uniqueCountries = countries.filter(makeUnique)
var uniqueShapes = shapes.filter(makeUnique)


// Add elements to dropdowns
var citiesList = d3.select(".cityDropdown");
uniqueCities.forEach(city => {
    citiesList.append('a').text(city).attr('class',"dropdown-item").attr('href','#')
})

// Select the button
var button = d3.select("#button");

// create callback function
button.on("click", function() {

    var filteredData = tableData

    var datetimeInput = d3.select("#datetime-form-input").property('value');

    if ( datetimeInput ) {
        filteredData = filteredData.filter( data => data.datetime === datetimeInput)}

    console.log(filteredData)
});