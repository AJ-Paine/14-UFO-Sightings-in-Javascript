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
    //Select input element
    var inputElement = d3.select("#datetime");
    //Get input value
    var inputValue = inputElement.property("value");
    console.log(inputValue);
    //Create filter based on input value
    var filteredDate = sightings.filter(sighting => sighting.datetime === inputValue);
    console.log(filteredDate)
    //Clear exisiting data from table
    tableData.html("");
    //Append filtered data to table
    filteredDate.forEach((sighting) => {
        var row = tableData.append("tr");
        Object.entries(sighting).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value)
        })
    });

}


