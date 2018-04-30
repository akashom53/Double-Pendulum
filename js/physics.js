var ball1 = {
	x: 0,
	y: 0
};

var ball2 = {
	x: 0,
	y: 0
};

var vel1 = 0;
var vel2 = 0;

var acc1 = 0;
var acc2 = 0;

var angle1 = initialAngle1;
var angle2 = initialAngle2;

function updatePhysics() {
	acc1 = (-g * (2 * mass1) * Math.sin(angle1)) - (mass2 * g * Math.sin(angle1 - 2 * angle2)) - (2 * Math.sin(angle1 - angle2)) * mass2 * ((vel2 * vel2 * thread2Length) + (vel1 * vel1 * thread1Length + Math.cos(angle1 - angle2)));
	acc1 /= thread1Length * (2 * mass1 + mass2 - mass2 * Math.cos(2 * angle1 - 2 * angle2));

	acc2 = 2 * Math.sin(angle1 - angle2) * (vel1 * vel1 * thread1Length * (mass1 + mass2) + g * (mass1 + mass2) * Math.cos(angle1) + vel2 * vel2 * thread2Length * mass2 * Math.cos(angle1 - angle2));
	acc2 /= thread2Length * (2 * mass1 + mass2 - mass2 * Math.cos(2 * angle1 - 2 * angle2));


	vel1 += acc1/15;
	vel2 += acc2/15;

	angle1 += vel1;
	angle2 += vel2;

	ball1.x = thread1Length * Math.sin(angle1) + anchorPoint.x;
	ball1.y = thread1Length * Math.cos(angle1) + anchorPoint.y;

	ball2.x = thread1Length * Math.sin(angle2) + ball1.x;
	ball2.y = thread1Length * Math.cos(angle2) + ball1.y;
}