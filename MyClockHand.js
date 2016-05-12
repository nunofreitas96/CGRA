/**
 * MyClockHand
 * @constructor
 */
 function MyClockHand(scene) {
 	CGFobject.call(this,scene);

 	this.obj = new MyQuad(this.scene);
 };

 MyClockHand.prototype = Object.create(CGFobject.prototype);
 MyClockHand.prototype.constructor = MyClockHand;



MyClockHand.prototype.display = function()
{
	this.scene.pushMatrix();
		this.scene.scale(0.05,1,1);
		this.obj.display();
    this.scene.popMatrix();
};