var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");


ctx.fillStyle = "purple";
ctx.fillRect(0,0,200,100);
ctx.fillStyle = "#FF0000";
ctx.fillRect(200,200,200,100);
ctx.fillStyle = "#00FF00";
ctx.fillRect(400,400,200,100);


ctx.beginPath();
ctx.arc(150,50,40,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.arc(50,50,40,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.arc(100,50,10,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.arc(100,10,25,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.arc(100,90,25,0,2*Math.PI);
ctx.stroke();

ctx.moveTo(0,0);
ctx.lineTo(200,100);
ctx.stroke();

ctx.moveTo(200,0);
ctx.lineTo(-200,200);
ctx.stroke();

ctx.font = "28px Arial";
ctx.fillText("Arrow",12,60);

ctx.font = "28px Arial";
ctx.fillText("Heads",115,60);

ctx.moveTo(100,0);
ctx.lineTo(100,100);
ctx.stroke();