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




//var dateForm = d3.select(".filter");

//Create event handler for date filter
//dateForm.on("submit", runFilter);


