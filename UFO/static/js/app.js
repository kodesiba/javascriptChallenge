// create source data variable and variables for dropdowns
var tableData = data;
var filteredData = tableData

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
var citiyDrop = d3.select(".cityDropdown");
var cityDropTop = d3.select(".cityDropTop");
uniqueCities.forEach(city => {
    citiyDrop.append('a').text(city).attr('class',"dropdown-item cityItem")
});
var selectedCity = null;
var cityItems = d3.selectAll('.cityItem')
cityItems.on('click', function() {
    selectedCity = $(this).text();
    cityDropTop.text(`Filter by City: ${$(this).text()} `);
    // console.log(selectedCity)
  });

var stateDrop = d3.select(".stateDropdown");
var stateDropTop = d3.select(".stateDropTop");
uniqueStates.forEach(state => {
    stateDrop.append('a').text(state).attr('class',"dropdown-item stateItem")
})
var selectedState = null;
var stateItems = d3.selectAll('.stateItem')
stateItems.on('click', function() {
    selectedState = $(this).text();
    stateDropTop.text(`Filter by State: ${$(this).text()} `);
    // console.log(selectedState)
  });

var countryDrop = d3.select(".countryDropdown");
var countryDropTop = d3.select(".countryDropTop");
uniqueCountries.forEach(county => {
    countryDrop.append('a').text(county).attr('class',"dropdown-item countryItem")
})
var selectedCountry = null;
var countryItems = d3.selectAll('.countryItem')
countryItems.on('click', function() {
    selectedCountry = $(this).text();
    countryDropTop.text(`Filter by Country: ${$(this).text()} `);
    // console.log(selectedCountry)
  });

var shapeDrop = d3.select(".shapeDropdown");
var shapeDropTop = d3.select(".shapeDropTop");
uniqueShapes.forEach(shape => {
    shapeDrop.append('a').text(shape).attr('class',"dropdown-item shapeItem")
})
var selectedShape = null;
var shapeItems = d3.selectAll('.shapeItem')
shapeItems.on('click', function() {
    selectedShape = $(this).text();
    shapeDropTop.text(`Filter by Shape: ${$(this).text()} `);
    // console.log(selectedShape)
  });

var tbody = d3.select(".databody")
filteredData.forEach(datapoint => {
    var newrow = tbody.append('tr')
    Object.entries(datapoint).forEach(([key, value]) => {
        newrow.append('td').text(value)
    })
})

// Select the enter button
var enter = d3.select("#enter");

// create callback function for enter button
enter.on("click", function() {
    var filteredData = tableData

    var datetimeInput = d3.select("#datetime-form-input").property('value');

    if ( datetimeInput ) {
        console.log(`filtered by date: ${datetimeInput}`)
        filteredData = filteredData.filter( data => data.datetime === datetimeInput)}

    if ( selectedCity ) {
        console.log(`filtered by city: ${selectedCity}`)
        filteredData = filteredData.filter( data => data.city === selectedCity)}

    if ( selectedState ) {
        console.log(`filtered by state: ${selectedState}`)
        filteredData = filteredData.filter( data => data.state === selectedState)}

    if ( selectedCountry ) {
        console.log(`filtered by country: ${selectedCountry}`)
        filteredData = filteredData.filter( data => data.country === selectedCountry)}

    if ( selectedShape ) {
        console.log(`filtered by shape: ${selectedShape}`)
        filteredData = filteredData.filter( data => data.shape === selectedShape)}

    console.log(filteredData)

    tbody.html("")    
    filteredData.forEach(datapoint => {
        var newrow = tbody.append('tr')
        Object.entries(datapoint).forEach(([key, value]) => {
            newrow.append('td').text(value)
        })
    })
});


// Select the reset button
var reset = d3.select("#reset");

// create callback function for reset button
reset.on("click", function() {
    filteredData = tableData
    d3.select("#datetime-form-input").property('value','')
    datetimeInput = null;
    selectedCity = null;
    selectedState = null;
    selectedCountry = null;
    selectedShape = null;
    cityDropTop.text(`Filter by City `);
    stateDropTop.text(`Filter by State `);
    countryDropTop.text(`Filter by Country `);
    shapeDropTop.text(`Filter by Shape `);
    console.log("page reset")

    tbody.html("")    
    filteredData.forEach(datapoint => {
        var newrow = tbody.append('tr')
        Object.entries(datapoint).forEach(([key, value]) => {
            newrow.append('td').text(value)
        })
    })
});

// prevent page from refreshing when enter is pressed
d3.select('form').on('submit', () => {
    d3.event.preventDefault()
})