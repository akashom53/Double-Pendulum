// P5 Sketch

function setup() {
	createCanvas(canvasW, canvasH);
}

function draw() {
	// Draw Canvas
	background(canvasBackground);
	rect(0,0,width-1, height-1);

	// Draw Pendulum
	updatePhysics();
	drawThread1();
	drawBall1();
	drawThread2();
	drawBall2();
}


function drawThread1(){
	line(anchorPoint.x, anchorPoint.y, ball1.x, ball1.y);
}
function drawBall1(){
	push();
	fill(0);
	ellipse(ball1.x, ball1.y, mass1 * massCoefficient, mass1 * massCoefficient);
	pop();
}
function drawThread2(){
	line(ball1.x, ball1.y, ball2.x, ball2.y);
}
function drawBall2(){
	push();
	fill(0);
	ellipse(ball2.x, ball2.y, mass2 * massCoefficient, mass2 * massCoefficient);
	pop();
}