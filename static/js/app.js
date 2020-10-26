 // from data.js
 var tableData = data;

 // Console.log the weather data from data.js
 console.log(data);
 
   //data.forEach(data => console.log(data));
 
 // Define the table body
 var tbody = d3.select("tbody");
 
 //Code for what happens when filter button is clicked
 var filter = d3.select("#button");
 filter.on("click", function() {
     
 // Prevent the page from refreshing
 d3.event.preventDefault();
     
   // Select the input element and get the raw HTML node
   var dateElement = d3.select("#datetime");
   var cityElement = d3.select("#cityname");
   var stateElement = d3.select("#statename");
   var countryElement = d3.select("#countryname");
   var shapeElement = d3.select("#shapename");
     
   // Get the value property of the input elements
   var dateValue = dateElement.property("value");
   var cityValue = cityElement.property("value");
   var stateValue = stateElement.property("value");
   var countryValue = countryElement.property("value");    
   var shapeValue = shapeElement.property("value");
 
 //  Create if statements for multiple filters
   if (dateValue != "") {
      tableata = tableatata.filter(entry => entry.datetime === datetimeValue);
   }
   if (cityValue != "") {
      tableata = tableata.filter(entry => entry.city === citynameValue);     
   }
   if (stateValue != "") {
     tableata = tableata.filter(entry => entry.state === statenameValue);     
   }
   if (countryValue != "") {
     tableata = tableata.filter(entry => entry.country === countrynameValue);     
   }
   if (shapeValue != "") {
     tableata = tableata.filter(entry => entry.shape === shapenameValue);     
   }  
   console.log(tableata);    
   filterdData();
 });
 
 //Make it so that the clear button refreshes the page to reset everything
 var clearEntries = d3.select("#clear-btn");
 clearEntries.on("click", function() {
   location.reload();
 });
 
 // Run filterdData function so that the table initially shows up
 filterdData();
 
 //Create loop through all data to show everything in the filtered dataset
 function filterdData(){
     console.log(tableData);
     tableData.forEach((newRow) =>{
         console.log(newRow);
         var row = tbody.append("tr");
         Object.values(newRow).forEach((value)=> {
             var cell = tbody.append("td");
             cell.text(value);
         });
     });
 }


 
 
