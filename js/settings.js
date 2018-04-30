// Settings
var canvasW = window.innerWidth;
var canvasH = window.innerHeight;
var canvasBackground = 255;


var anchorPoint = {
	x : canvasW/2,
	y : canvasH/2
};

var thread1Length = canvasH/5;
var thread2Length = canvasH/5;

var mass1 = 10;
var mass2 = 10;

var initialAngle1 = Math.PI/2;
var initialAngle2 = 0;

var massCoefficient = 4;

var g = 9.8;