
console.log("script loaded");
var canvas = document.getElementById("playground");
var context = canvas.getContext("2d");
var circle = document.getElementById("circle");
var stop = document.getElementById("stop");

context.strokeRect(0, 0, 538, 538);

var rad = 0;
var grow = true; //false means shrink
var request_id;
var img = new Image();
img.src = "img.jpg";


var circle_click =  function(e){
    //clicking of circle button
    e.preventDefault();
    window.requestAnimationFrame(circle_func);
    console.log("circle_clicked");
};

var bounce_click = function(e){
    e.preventDefault();
    window.requestAnimationFrame(bounce_func);
    console.log("bounce_clicked");
}

var stop_click = function(e){
    e.preventDefault();
    window.cancelAnimationFrame(request_id);
    console.log("stop_clicked");
}

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
    request_id = window.requestAnimationFrame(circle_func);
}

var x_vel, y_vel;
var x, y;
x = y = 538 / 2;
x_vel = 3;
y_vel = 5;
var bounce_func = function(){
    context.clearRect(0, 0, 538, 538);
    context.strokeRect(0, 0, 538, 538);
    context.drawImage(img, x, y, 50, 50);
    if (x <= 0 + 50 || x >= 538 - 50){
	x_vel = -x_vel;
    }
    if (y <= 0 + 50 || y >= 538 - 50){
	y_vel = -y_vel;
    }
    console.log("x: " + x + " y: " + y );
    x += x_vel;
    y += y_vel;
    

    request_id = window.requestAnimationFrame(bounce_func);

}




circle.addEventListener("click", circle_click);
stop.addEventListener("click", stop_click);
bounce.addEventListener("click", bounce_click);
console.log("script loaded");
