
console.log("script loaded");
var canvas = document.getElementById("playground");
var context = canvas.getContext("2d");
var button = document.getElementById("clear");

context.strokeRect(0, 0, 538, 538);

var buttonClick =  function(e){
    e.preventDefault();
    context.clearRect(0, 0, 538, 538);
    context.strokeRect(0, 0, 538, 538);
    console.log("button clicked!");
};



var canvasClick = function(e){
    e.preventDefault();
    context.beginPath();
    context.fillStyle = "red";
    var x,y;
    x = e.offsetX;
    y = e.offsetY;
    context.arc(x, y, 5, 0, 6.28);
    context.stroke();
    context.fill();
    context.closePath();
    console.log("canvas click");
};

button.addEventListener("click", buttonClick);
canvas.addEventListener("click", canvasClick);
console.log("script loaded");
var canvas = document.getElementById("playground");
var context = canvas.getContext("2d");
var button = document.getElementById("clear");

context.strokeRect(0, 0, 538, 538);

var buttonClick =  function(e){
    e.preventDefault();
    context.clearRect(0, 0, 538, 538);
    context.strokeRect(0, 0, 538, 538);
    console.log("button clicked!");
};

var lastX, lastY;

var canvasClick = function(e){
    e.preventDefault();
    context.beginPath();
    context.fillStyle = "red";
    var x,y;
    x = e.offsetX;
    y = e.offsetY;

    context.moveTo(x, y);
    context.lineTo(lastX, lastY);

    //redraw old circle so circle is on top of line
    context.moveTo(lastX, lastY);
    context.arc(lastX, lastY, 5, 0, 6.28);
    context.stroke();
    context.fill();

    lastX = x;
    lastY = y;

    //draw new circle
    context.moveTo(x, y);
    context.arc(x, y, 5, 0, 6.28);
    context.stroke();
    context.fill();

    context.closePath();
    console.log("canvas click");
};

button.addEventListener("click", buttonClick);
canvas.addEventListener("click", canvasClick);
