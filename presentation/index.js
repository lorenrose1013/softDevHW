console.log("script loaded");

var button = document.getElementById("submit");
var input = document.getElementById("textbox");
var comments = document.getElementById("comments");


button.addEventListener("click", function(e){
	console.log("clicked");

	text = input.value;

	console.log("text: " + text);

	comments.innerHTML = comments.innerHTML + "<br>" +  text;

	console.log("done");
});