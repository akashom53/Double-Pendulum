// P5 Sketch

var pathCanvas;

var prevX, prevY;

function setup() {
	createCanvas(canvasW, canvasH);
	pathCanvas = createGraphics(width, height);
	pathCanvas.pixelDensity(1);
	pathCanvas.background(canvasBackground);
}

function draw() {
	// Draw Canvas
	imageMode(CORNER);
	image(pathCanvas, 0, 0, width, height);

	// Draw Pendulum
	updatePhysics();
	drawThread1();
	drawBall1();
	drawThread2();
	drawBall2();

	// Draw Path
	if (frameCount > 1) {
		drawPath();
	}
}


function drawThread1(){
	push();
	stroke(t1Color.r, t1Color.g ,t1Color.b, t1Color.a);
	line(anchorPoint.x, anchorPoint.y, ball1.x, ball1.y);
	pop();
}
function drawBall1(){
	push();
	noStroke();
	fill(b1Color.r, b1Color.g, b1Color.b, b1Color.a);
	ellipse(ball1.x, ball1.y, mass1 * massCoefficient, mass1 * massCoefficient);
	pop();
}
function drawThread2(){
	push();
	stroke(t2Color.r, t2Color.g ,t2Color.b, t2Color.a);
	line(ball1.x, ball1.y, ball2.x, ball2.y);
	pop();
}
function drawBall2(){
	push();
	noStroke();
	fill(b2Color.r, b2Color.g, b2Color.b, b2Color.a);
	ellipse(ball2.x, ball2.y, mass2 * massCoefficient, mass2 * massCoefficient);
	pop();
}

function drawPath(){
	pathCanvas.push();
	pathCanvas.translate(0,0);	
	pathCanvas.stroke(pathColor.r, pathColor.g, pathColor.b, pathColor.a);
	pathCanvas.line(prevX, prevY, ball2.x, ball2.y);
	prevX = ball2.x;
	prevY = ball2.y;
	pathCanvas.pop();
}
