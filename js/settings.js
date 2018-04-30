// Settings
var canvasW = window.innerWidth;
var canvasH = window.innerHeight;
var canvasBackground = 0;

var b1Color = {
	r : 255,
	b : 20,
	g : 20,
	a : 255
};
var b2Color = {
	r : 255,
	b : 20,
	g : 20,
	a : 255
};
var t1Color = {
	r : 255,
	b : 255,
	g : 255,
	a : 255
};
var t2Color = {
	r : 255,
	b : 255,
	g : 255,
	a : 255
};
var pathColor = {
	r : 0,
	b : 255,
	g : 255,
	a : 100
};


var anchorPoint = {
	x : canvasW/2,
	y : canvasH/2
};

var thread1Length = canvasH/5;
var thread2Length = canvasH/4;

var mass1 = 10;
var mass2 = 10;

var initialAngle1 = Math.PI/4;
var initialAngle2 = Math.PI/2;

var massCoefficient = 4;

var g = 9.8;