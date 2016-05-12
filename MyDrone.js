function MyDrone(scene) {
	CGFobject.call(this, scene);
	this.body = new MyDroneBody(this.scene);
	//Velocity
	this.xvel = 0;
	this.yvel = 0;
	this.zvel = 0;
	
	this.uvel = 0;
	this.fvel = 0;
	//Acceleration
	this.xacc = 0;
	this.yacc = 0;
	this.zacc = 0;
	//Position
	this.x = 7.5;
	this.y = 7.5;
	this.z = 7.5;
	//Drone shift
	this.rshift = 0;
	
	this.xang = 0;
	this.yang = 0;
	this.zang = 0;
	//Time
	this.ptime = -1;
};

MyDrone.prototype = Object.create(CGFobject.prototype);
MyDrone.prototype.constructor = MyDrone;

MyDrone.prototype.display = function () {
	this.scene.pushMatrix();
		this.scene.translate(this.x, this.y, this.z);
		//this.scene.rotate(-180 * degToRad, 0, 1, 0);
		this.scene.rotate(this.yang,0,1,0);
		this.scene.rotate(this.xang,1,0,0);
		//this.scene.rotate(this.zang * degToRad,0,0,1);
		this.body.display();
	this.scene.popMatrix();

};

MyDrone.prototype.moveIt = function (char) {
	switch (char) {
		case (1): //a - rotate left
			this.rshift = 70;
			break;
		case (2): //d - rotate right
			this.rshift = -70;
			break;
		case (3): //w - move forward
			this.fvel = -5;
			break;
		case (4): //s - move backwards
			this.fvel = 5;
			break;
		case (5): // i - move up
			this.uvel = 5;
			break;
		case (6): // j - move down
			this.uvel = -5;
			break;
		case (7):
		case (8):
			this.rshift = 0;
			break;
		case (9):
		case (10):
			this.fvel = 0;
			break;
		case (11):
		case (12):
			this.uvel = 0;
			break;
	}

};

MyDrone.prototype.update = function (currtime) {
	if (this.ptime == -1) {
		this.ptime = currtime;
	}
	var dtime = currtime - this.ptime;
	this.yvel = this.uvel;
	this.y += this.yvel * (dtime)/1000;
	//this.zang = -this.xvel * 2 * degToRad;
	this.xang = this.fvel * 2 * degToRad;
	this.yang += this.rshift * (dtime)/1000 * degToRad;
	this.xvel = this.fvel * Math.cos(this.yang-90*degToRad);
	this.zvel = -this.fvel * Math.sin(this.yang-90*degToRad);
	this.x += this.xvel * (dtime)/1000;
	this.z += this.zvel * (dtime)/1000;
	
	this.ptime = currtime;
	if (this.fvel>0) {
		this.body.update(dtime,1);
	} else if (this.fvel<0) {
		this.body.update(dtime,2);
	} else {
		this.body.update(dtime,0);
	}
};

