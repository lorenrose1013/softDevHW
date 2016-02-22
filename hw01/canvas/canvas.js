var canvas = document.getElementById("ftb2maga");
var context = canvas.getContext("2d");


var x0, y0, dx, dy, tin;
x0 = y0 = 300;
dx = dy = 50;
tin = 3;

//commence sequence of drawings
context.beginPath();

//set line color red
context.strokeStyle = "red";

//move drawing cursor to x,y
context.moveTo(x0, y0);


for(var i = 0; i < 37 ; i ++){
	//from cursor position, draw lines to x,y
	context.lineTo(x0 + dx, y0 - dy - tin);
	context.lineTo(x0 + dx*2 - tin , y0 - tin);
	context.lineTo(x0 + dx, y0 + dy - tin);
	context.lineTo(x0 + tin, y0 - tin);
	tin = tin + 3;
}
//actually draw those above lines
context.stroke();
//end this drawing
context.closePath();

//new drawing
context.beginPath();

//make it blue
context.strokeStyle = "blue";

for(var i = 0; i < 30 ; i ++){
	if (i % 2 == 0){
		context.moveTo(100 + i* 3, 400 + 3);
		//draw an arc at x,y with rad r from radian 0 - 6.28 
		context.arc(100 + i*3, 400 + 3, 25, 0, 6.28);
	}
	if (i % 2 != 0){
		context.moveTo(100 + i* 3, 400 - 3);
		context.arc(100 + i*3, 400 - 3, 25, 0, 6.28);
	}
}
//actually draw the lines
context.stroke();
//end sequence of drawings
context.closePath();
