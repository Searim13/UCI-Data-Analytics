// from data.js
var tableData = data;
var tbody = d3.select("tbody");
// YOUR CODE HERE!
tableData.forEach((tableData) => {
    var newrow = tbody.append("tr");
    Object.values(tableData).forEach(value=> {
      var cell = tbody.append("td");
      cell.text(value);
    });
  }); 
  /*function clearBox()
  {
      d3.select('#tableinfo').text = "";
      d3.select('tr').text = "";
      d3.select('.td').text = "";
  }; */
  function clearBox()
{
    document.getElementById('tableinfo').innerHTML = "";
}

var filteredDate = tableData.filter(event => event.datetime === inputvalue);
var filterCity = tableData.filter(event => event.city === inputvalue);
var filterState = tableData.filter(event => event.state === inputvalue);
var filterCountry = tableData.filter(event => event.country === inputvalue);
var filterShape = tableData.filter(event => event.shape === inputvalue);
var filterDuration = tableData.filter(event => event.durationMinutes === inputvalue);
var inputvalue;
function buttonClick(inputvalue) {
  inputvalue = d3.select('#datetime').property('value');
  console.log(inputvalue);
  clearBox();
  var filteredDate = tableData.filter(event => event.datetime === inputvalue);
  console.log(filteredDate);
  filteredDate.forEach((filteredDate) => {
    var newrow = tbody.append("tr");
    Object.values(filteredDate).forEach(value=> {
      var cell = tbody.append("td");
      cell.text(value);
    });
  });
}