function MyCapsule(scene) {
	CGFobject.call(this, scene);
	var slices = 50;
	var stacks = 20;
	this.ssphere = new MySemiSphere(this.scene,slices,stacks);
	this.circle = new MyCircle(this.scene, slices);
};

MyCapsule.prototype = Object.create(CGFobject.prototype);
MyCapsule.prototype.constructor = MyCapsule;

MyCapsule.prototype.display = function () {
	this.scene.pushMatrix();
		this.ssphere.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.rotate(180 * degToRad, 0, 1, 0);
		this.circle.display();
	this.scene.popMatrix();

};