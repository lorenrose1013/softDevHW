


var dNum = [548, 291, 251, 246, 210, 182, 160, 147, 142, 121, 118, 118, 117, 116, 109, 96, 93, 92, 85, 84, 78, 75, 74, 71, 67, 60, 59, 59, 52, 46, 43, 43, 42, 41, 37, 37, 37, 37, 35, 33, 32, 31, 30, 30, 27, 27, 26, 25, 23, 20, 18, 17, 12, 12, 11, 11, 1];

var dState = ["California", "New York", "Texas", "Florida", "Pennsylvania", "Illinois", "Ohio", "Michigan", "New Jersey", "North Carolina", "Maryland", "Washington", "Georgia", "Massachussets", "Virginia", "Wisconsin", "Minessota", "Indiana", "Arizona", "Missouri", "Colorado", "Tennessee", "Oregon", "Connecticut", "Puerto Rico", "Alabama", "Kentucky", "Louisiana", "South Carolina", "Iowa", "District of Columbia", "Nevada", "New Mexico", "Oklahoma", "Mississippi", "Arkansas", "Kansas", "Utah", "West Virginia", "Hawaii", "Rhode Island", "New Hampshire", "Delaware", "Maine", "Nebraska", "Idaho", "Montana", "Vermont", "South Dakota", "North Dakota", "Alaska", "Wyoming", "Democrats Abroad", "Guam", "Virgin Islands", "American Samoa", "Northern Marianas", "Unassigned"];


d3.select(".chart")
  .selectAll("div")
      .data(dNum)
  .enter().append("div")
      .style("width", function(d) {
             return d * 1.5  + "px"; })
      .text(function(d, i) {
      	return dState[i] + " " +  d;});
