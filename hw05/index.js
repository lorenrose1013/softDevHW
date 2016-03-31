console.log("script starting");

/**
0: state name
1: number of democratic delegates
2: allotted for democrats (true or false)
3: number of republican delegates
4: allotted for republicans (true or false)
*/

var states = [
	["Alabama", 58, true, 50, true],
	["Alaska", 18, true, 28, true],
	["Am. Samoa", 10, true, 9, false],
	["Arizona", 75, false, 58, false],
	["Arkansas", 37, true, 40, true],
	["California", 476, false, 172, false],
	["Colorado", 77, true, 37, false],
	["Connecticut", 65, false, 28, false],
	["Delaware", 27, false, 16, false],
	["DC", 37, false, 19, true],
	["Florida", 238, true, 99, true],
	["Georgia", 112, true, 76, true],
	["Guam", 11, false, 9, true],
	["Hawaii", 31, false, 19, true],
	["Idaho", 24, false, 32, true],
	["Illinois", 190, true, 69, true],
	["Indiana", 79, false, 57, false],
	["Iowa", 54, true, 30, true],
	["Kansas", 37, true, 40, true],
	["Kentucky", 53, false, 45, true],
	["Louisiana", 61, true, 46, true],
	["Maine", 30, true, 23, true],
	["Maryland", 105, false, 38, false],
	["Massachusetts", 121, true, 42, true],
	["Michigan", 152, true, 59, true],
	["Minnesota", 94, true, 38, true],
	["Mississippi", 41, true, 39, true],
	["Montana", 22, true, 27, true],
	["Nebraska", 31, true, 36, false],
	["Nevada", 39, true, 30, true],
	["New Hampshire", 32, true, 23, true],
	["New Jersey", 126, false, 51, false],
	["New Mexico", 38, false, 24, false],
	["New York", 277, false, 95, false],
	["North Carolina", 120, true, 72, true],
	["North Dakota", 19, false, 28, false],
	["N. Marianas", 11, true, 9, true],
	["Ohio", 165, true, 66, true],
	["Oklahoma", 42, true, 43, true],
	["Oregon", 64, false, 28, false],
	["Pennsylvania", 181, false, 71, false],
	["Puerto Rico", 58, false, 23, true],
	["Rhode Island", 31, false, 19, false],
	["South Carolina", 57, true, 50, true],
	["South Dakota", 20, false, 29, false],
	["Tennesse", 77, true, 58, true],
	["Texas", 237, true, 155, true],
	["Utah", 28, false, 40, false],
	["Vermont", 23, true, 16, true],
	["Virgin Islands", 11, false, 9, true],
	["Virginia", 112, true, 49, true],
	["Washington", 102, false, 44, false],
	["West Virginia", 35, false, 34, false],
	["Wisconsin", 89, false, 42, false],
	["Wyoming", 17, false, 29, true]
]

var makeCharts = function makeCharts() {
	// clear all existing bars
	d3.selectAll(".chart").selectAll("div").remove();
	
	addBars(0, "#44F", "#AAF");
	addBars(1, "#F44", "#FAA");
};

// party - 0: democratic, 1: republican
var addBars = function addBars(party, allCol, nonCol) {
	if (party == 0) { tag = "#dem .chart"; }
	else if (party == 1) { tag = "#rep .chart"; }
	chart = d3.select(tag)
		.selectAll("div")
			.data(states)
		.enter().append("div")
			.style("width", function(d) {
				return barScale(party, d[party*2+1]) + "px"; 
			})
			.style("background-color", function(d) {
				if (d[party*2+2])
					return allCol;
				else
					return nonCol;
			})
			.text(function(d) {
				return d[0]+": "+d[party*2+1];
			})
};

var barScale = function barScale(party, val) {
	var counts = states.map(s => s[party*2+1]);
	var scale = d3.scale.linear()
		.domain([0, d3.max( counts )])
		.range([0, 480])
	;
	return scale(val);
};

makeCharts();
