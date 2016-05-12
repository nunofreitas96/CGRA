/**
* MyBlade
* @constructor
*/
function MyBlade(scene) {
    CGFobject.call(this, scene);

    this.initBuffers();
};

MyBlade.prototype = Object.create(CGFobject.prototype);
MyBlade.prototype.constructor = MyBlade;

MyBlade.prototype.initBuffers = function () {
    this.vertices = [0, 0, -1.5,
		0, 0, 1.5,
		-0.25, 0, 0,
		0.25, 0, 0];
    this.normals = [0, 1, 0,
		0, 1, 0,
		0, 1, 0,
		0, 1, 0];
    this.indices = [0,2,3,
					2,1,3,
					0,3,2,
					2,3,1];
    //this.texCoords = [];

    this.primitiveType = this.scene.gl.TRIANGLES;
    this.initGLBuffers();
};