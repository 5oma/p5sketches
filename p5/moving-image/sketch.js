var maxCircleSize = 20
var phase = 0, speed = 0.03;

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(127);
  var x = width/2; 
  var y = height/2 + sin(phase) * 50;
  phase = frameCount * speed;
  var sizeOffset = (cos(phase) + 1) * .5;
  var circleSize = sizeOffset * maxCircleSize;

  ellipse(x, y, circleSize, circleSize);
	
}
