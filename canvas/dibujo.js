var canvas = document.getElementById("lienzo");
var ctx = canvas.getContext("2d");


var gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
gradient.addColorStop(0, "skyblue");
gradient.addColorStop(1, "lightpink");
ctx.fillStyle = gradient;
ctx.fillRect(0, 0, canvas.width, canvas.height);


ctx.beginPath();
ctx.arc(200, 200, 100, 0, 2 * Math.PI);
ctx.fillStyle = "yellow";
ctx.fill();


ctx.beginPath();
ctx.arc(100, 100, 50, 0, 2 * Math.PI);
ctx.arc(150, 100, 50, 0, 2 * Math.PI);
ctx.arc(200, 100, 50, 0, 2 * Math.PI);
ctx.arc(250, 100, 50, 0, 2 * Math.PI);
ctx.arc(300, 100, 50, 0, 2 * Math.PI);
ctx.fillStyle = "white";
ctx.fill();

ctx.beginPath();
ctx.moveTo(400, 300);
ctx.lineTo(350, 400);
ctx.lineTo(450, 400);
ctx.closePath();
ctx.fillStyle = "green";
ctx.fill();

ctx.fillStyle = "brown";
ctx.fillRect(420, 400, 60, 100);

ctx.beginPath();
ctx.moveTo(600, 200);
ctx.lineTo(650, 250);
ctx.lineTo(650, 150);
ctx.closePath();
ctx.fillStyle = "black";
ctx.fill();

ctx.font = "bold 30px Arial";
ctx.fillStyle = "black";
ctx.fillText("¡Un dibujo chido!", 400, 50);
