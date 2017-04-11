var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
/*adding x and y to make the ball move*/
var x = canvas.width/2;
var y = canvas.height-30;


var dx = 2;
var dy = -2;

var ballRadius = 10;

function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI*2);
    
    ctx.fill();
    ctx.closePath();
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  if(x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
    dx = -dx;
    ctx.fillStyle = getRandomColor();
}
if(y + dy > canvas.height-ballRadius || y + dy < ballRadius) {
    dy = -dy;
  context.fillStyle = getRandomColor();
}
    drawBall();
    x += dx;
    y += dy;
}
setInterval(draw, 15);
function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}