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
var filterForm = d3.select("form");

//Create event handler for filter button
filterButton.on("click", runFilter);
filterForm.on("submit", runFilter);

//Create runFilter function
function runFilter() {
    //Prevent page from refreshing
    d3.event.preventDefault();
    //Select input elements
    var inputDateElement = d3.select("#datetime");
    //Get input values
    var inputDateValue = inputDateElement.property("value");
    //Log input values
    console.log(`Date Entered: ${inputDateValue}`);
    //Create filter based on input value
    var filteredData = sightings.filter(sighting => 
        sighting.datetime === inputDateValue
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


