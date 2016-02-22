
console.log("script loaded");
var canvas = document.getElementById("playground");
var context = canvas.getContext("2d");
var button = document.getElementById("circle");

context.strokeRect(0, 0, 538, 538);

var rad = 0;
var grow = true; //false means shrink

var buttonClick =  function(e){
    //clicking of circle button
    e.preventDefault();
    window.requestAnimationFrame(circle_func);
    console.log("button clicked!");
};



var circle_func = function(){
    context.clearRect(0, 0, 538, 538);
    
    //draw the circle
    context.beginPath();
    context.fillStyle = "red";
    var x,y; 
    x = 538 / 2;  //circle centered 
    y = 538 /  2;
    context.arc(x, y, rad, 0, 6.28);
    context.stroke();
    context.fill();
    context.closePath();
    if (grow){
	rad ++;
	}
    else{
	rad --;
	}
    if (rad == 0 || rad == 538 / 2){
	grow = !grow;
    }

    context.strokeRect(0, 0, 538, 538);
    window.requestAnimationFrame(circle_func);
}



button.addEventListener("click", buttonClick);
console.log("script loaded");
