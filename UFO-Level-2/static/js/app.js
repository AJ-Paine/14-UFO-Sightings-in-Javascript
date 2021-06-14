// Grab data from data.js with new variable
var sightings = data;

//Select table body any existing table data
var tableData = d3.select("table>tbody");

//Clear exisiting data from table
tableData.html("");

//Append table data
sightings.forEach((sighting) => {
    var row = tableData.append("tr");
    Object.entries(sighting).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value)
    })
});

//Select filter button
var filterButton = d3.select("#filter-btn");

//Create event handler for filter button
filterButton.on("click", runFilter);

//Create runFilter function
function runFilter() {
    //Prevent page from refreshing
    d3.event.preventDefault();
    //Select input elements
    var inputDateElement = d3.select("#datetime");
    var inputCityElement = d3.select("#city");
    var inputStateElement = d3.select("#state");
    var inputCountryElement = d3.select("#country");
    var inputShapeElement = d3.select("#shape");
    //Get input values
    var inputDateValue = inputDateElement.property("value");
    var inputCityValue = inputCityElement.property("value").toLowerCase();
    var inputStateValue = inputStateElement.property("value").toLowerCase();
    var inputCountryValue = inputCountryElement.property("value").toLowerCase();
    var inputShapeValue = inputShapeElement.property("value").toLowerCase();
    //Log input values
    console.log(`Date Entered: ${inputDateValue}`);
    console.log(`City Entered: ${inputCityValue}`);
    console.log(`State Entered: ${inputStateValue}`);
    console.log(`Country Entered: ${inputCountryValue}`);
    console.log(`Shape Entered: ${inputShapeValue}`);
    //Create filter based on input value
    var filteredData = sightings.filter(sighting => 
        sighting.datetime === inputDateValue
        && sighting.city === inputCityValue
        && sighting.state === inputStateValue
        && sighting.country === inputCountryValue
        && sighting.shape === inputShapeValue
        );
    //Log filtered data
    console.log(filteredData);
    //Clear exisiting data from table
    tableData.html("");
    //Append filtered data to table
    filteredData.forEach((sighting) => {
        var row = tableData.append("tr");
        Object.entries(sighting).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value)
        })
    });
}


