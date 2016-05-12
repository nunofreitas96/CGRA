/**
 * MyTable
 * @constructor
 */
 /*function MyTable(scene) {
 	CGFobject.call(this, scene);

 	this.myUnitCubeQuad = new MyUnitCubeQuad(this.scene);
 	this.myUnitCubeQuad.initBuffers();
 };

 MyTable.prototype = Object.create(CGFobject.prototype);
 MyTable.prototype.constructor = MyTable;

 MyTable.prototype.display = function() {
 	// legs
 	this.scene.pushMatrix();
 	this.scene.translate(2, 3.5 / 2, 1);
 	this.scene.scale(0.3, 3.5, 0.3);
 	this.myUnitCubeQuad.display();
 	this.scene.popMatrix();

 	this.scene.pushMatrix();
 	this.scene.translate(2, 3.5 / 2, -1);
 	this.scene.scale(0.3, 3.5, 0.3);
 	this.myUnitCubeQuad.display();
 	this.scene.popMatrix();

 	this.scene.pushMatrix();
 	this.scene.translate(-2, 3.5 / 2, 1);
 	this.scene.scale(0.3, 3.5, 0.3);
 	this.myUnitCubeQuad.display();
 	this.scene.popMatrix();

 	this.scene.pushMatrix();
 	this.scene.translate(-2, 3.5 / 2, -1);
 	this.scene.scale(0.3, 3.5, 0.3);
 	this.myUnitCubeQuad.display();
 	this.scene.popMatrix();

 	// table top
 	this.scene.pushMatrix();
 	this.scene.translate(0, 3.5, 0);
 	this.scene.scale(5, 0.3, 3);
 	this.myUnitCubeQuad.display();
 	this.scene.popMatrix();
 }*/
 /**
 * myTable
 * @param gl {WebGLRenderingContext}
 * @constructor
 */
function MyTable(scene) {
	CGFobject.call(this,scene);

	this.objq = new MyUnitCubeQuad(this.scene);
    this.objq.initBuffers();
};

MyTable.prototype = Object.create(CGFobject.prototype);
MyTable.prototype.constructor=MyTable;

MyTable.prototype.display = function()
{
    this.scene.pushMatrix();
    
    this.scene.translate(0, 3.65, 0);
    this.scene.scale(5, 0.3, 3);
    this.objq.display();

    this.scene.popMatrix();
    this.scene.pushMatrix();

	
    this.scene.translate(2.35, 1.75, 1.35);
    this.scene.scale(0.3, 3.5, 0.3);
    this.objq.display();

	this.scene.popMatrix();
    this.scene.pushMatrix();

    this.scene.translate(-2.35, 1.75, -1.35);
    this.scene.scale(0.3, 3.5, 0.3);
    this.objq.display();

    this.scene.popMatrix();
    this.scene.pushMatrix();

    this.scene.translate(2.35, 1.75, -1.35);
    this.scene.scale(0.3, 3.5, 0.3);
    this.objq.display();

    this.scene.popMatrix();
    this.scene.pushMatrix();

    this.scene.translate(-2.35, 1.75, 1.35);
    this.scene.scale(0.3, 3.5, 0.3);
    this.objq.display();

    this.scene.popMatrix();

}
