function MyDroneBody(scene) {
	CGFobject.call(this, scene);
	this.pipe = new MyPipe(this.scene);
	this.capsule = new MyCapsule(this.scene);
	//Blades
	this.bfspeed = 0;
	this.bbspeed = 0;
	this.bspeed = 1;
	this.bang = 0;
	this.bfang = 0;
	this.bbang = 0;
	this.blade = new MyBlade(this.scene);
};

MyDroneBody.prototype = Object.create(CGFobject.prototype);
MyDroneBody.prototype.constructor = MyDroneBody;

MyDroneBody.prototype.display = function () {
	this.scene.pushMatrix();
		this.scene.rotate(180 * degToRad,0,0,1);
		this.scene.rotate(90 * degToRad,1,0,0);
		this.scene.translate(0,0,-0.3);
		this.scene.scale(1,1,1.2);
		this.capsule.display();
	this.scene.popMatrix();
	this.scene.pushMatrix();
		this.scene.rotate(45 * degToRad,0,1,0);
		this.scene.pushMatrix();
			this.scene.translate(0,0.5,-2.5);
			this.scene.rotate(this.bfang * degToRad,0,1,0);
			this.blade.display();
		this.scene.popMatrix();
		this.scene.pushMatrix();
			this.scene.translate(0,0.5,2.5);
			this.scene.rotate(this.bbang * degToRad,0,1,0);
			this.blade.display();
		this.scene.popMatrix();
		this.scene.pushMatrix();
			this.scene.rotate(90 * degToRad,1,0,0);
			this.scene.translate(0,2.5,-0.5);
			this.scene.scale(0.25,0.25,0.75)
			this.pipe.display();
		this.scene.popMatrix();
		this.scene.pushMatrix();
			this.scene.rotate(90 * degToRad,1,0,0);
			this.scene.translate(0,-2.5,-0.5);
			this.scene.scale(0.25,0.25,0.75)
			this.pipe.display();
		this.scene.popMatrix();
		this.scene.pushMatrix();
			this.scene.scale(0.25,0.25,5);
			this.scene.translate(0,0,-0.5);
			this.pipe.display();
		this.scene.popMatrix();
	this.scene.popMatrix();
	this.scene.pushMatrix();
		this.scene.rotate(-45 * degToRad,0,1,0);
		this.scene.pushMatrix();
			this.scene.translate(0,0.5,-2.5);
			this.scene.rotate(this.bfang * degToRad,0,1,0);
			this.blade.display();
		this.scene.popMatrix();
		this.scene.pushMatrix();
			this.scene.translate(0,0.5,2.5);
			this.scene.rotate(this.bbang * degToRad,0,1,0);
			this.blade.display();
		this.scene.popMatrix();
		this.scene.pushMatrix();
			this.scene.rotate(90 * degToRad,1,0,0);
			this.scene.translate(0,2.5,-0.5);
			this.scene.scale(0.25,0.25,0.75)
			this.pipe.display();
		this.scene.popMatrix();
		this.scene.pushMatrix();
			this.scene.rotate(90 * degToRad,1,0,0);
			this.scene.translate(0,-2.5,-0.5);
			this.scene.scale(0.25,0.25,0.75)
			this.pipe.display();
		this.scene.popMatrix();
		this.scene.pushMatrix();
			this.scene.scale(0.25,0.25,5);
			this.scene.translate(0,0,-0.5);
			this.pipe.display();
		this.scene.popMatrix();
	this.scene.popMatrix();
};

MyDroneBody.prototype.update = function (dtime,dir){
	switch (dir){
		case 0:
			this.bbspeed = this.bspeed;
			this.bfspeed = this.bspeed;
			break;
		case 1:
			this.bbspeed = this.bspeed;
			this.bfspeed = 3;
			break;
		case 2:
			this.bbspeed = 3;
			this.bfspeed = this.bspeed;
			break;
	}
	this.bang += this.bspeed * dtime;
	this.bbang += this.bbspeed * dtime;
	this.bfang += this.bfspeed * dtime;
	this.bang %= 360;
}

