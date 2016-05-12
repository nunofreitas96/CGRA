function MyDroneBody(scene) {
	CGFobject.call(this, scene);
	
	this.pipe = new MyPipe(this.scene);
	//Blades
	this.bspeed = 23;
	this.bang = 0;
	this.blade = new MyBlade(this.scene);
};

MyDroneBody.prototype = Object.create(CGFobject.prototype);
MyDroneBody.prototype.constructor = MyDroneBody;

MyDroneBody.prototype.display = function () {
	this.scene.pushMatrix();
		this.scene.rotate(90 * degToRad,1,0,0);
		this.scene.translate(0,0,-0.5);
		this.scene.scale(0.5,0.5,1);
		this.pipe.display();
	this.scene.popMatrix();
	this.scene.pushMatrix();
		this.scene.rotate(45 * degToRad,0,1,0);
		this.scene.pushMatrix();
			this.scene.translate(0,0.5,-2.5);
			this.scene.rotate(this.bang * degToRad,0,1,0);
			this.blade.display();
		this.scene.popMatrix();
		this.scene.pushMatrix();
			this.scene.translate(0,0.5,2.5);
			this.scene.rotate(this.bang * degToRad,0,1,0);
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
			this.scene.rotate(this.bang * degToRad,0,1,0);
			this.blade.display();
		this.scene.popMatrix();
		this.scene.pushMatrix();
			this.scene.translate(0,0.5,2.5);
			this.scene.rotate(this.bang * degToRad,0,1,0);
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

MyDroneBody.prototype.update = function (dtime){
	this.bang += this.bspeed * dtime;
	this.bang %= 360;
}

