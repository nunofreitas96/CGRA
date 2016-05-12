function MyPipe(scene) {
	CGFobject.call(this, scene);
	var slices = 50;
	var stacks = 20;
	this.cilinder = new MyCilinder(this.scene, slices, stacks);
	this.circle = new MyCircle(this.scene, slices);
};

MyPipe.prototype = Object.create(CGFobject.prototype);
MyPipe.prototype.constructor = MyPipe;

MyPipe.prototype.display = function () {
	this.scene.pushMatrix();
		this.cilinder.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(0,0,1);
		this.circle.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.rotate(180 * degToRad, 0, 1, 0);
		this.circle.display();
	this.scene.popMatrix();

};