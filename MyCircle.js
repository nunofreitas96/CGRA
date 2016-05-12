/**
* MyCircle
* @constructor
*/
function MyCircle(scene, slices) {
	CGFobject.call(this,scene);

	this.slices = slices;

	this.initBuffers();
};

MyCircle.prototype = Object.create(CGFobject.prototype);
MyCircle.prototype.constructor = MyCircle;

MyCircle.prototype.initBuffers = function() {
	this.vertices = [];
	this.normals = [];
	this.indices = [];
	this.texCoords = [];

	this.angle = Math.PI*2/this.slices;
	this.vertices.push(0,0,0);
	this.normals.push(0,0,1);
	this.texCoords.push(0.5,0.5);
	
	for (i = 1; i <= this.slices+1; i++) {
		this.vertices.push(Math.cos(this.angle*i),Math.sin(this.angle*i),0);
		this.normals.push(0,0,1);
		var textCS = (Math.cos(this.angle*i)+1)/2;
		var textCT = (Math.sin(this.angle*i+Math.PI)+1)/2;
		this.texCoords.push(textCS,textCT);
	}

	for (i=1;i<this.slices;i++){
		this.indices.push(i+1,0,i);
	}
	this.indices.push(1,0,this.slices);

	this.primitiveType = this.scene.gl.TRIANGLES;
	this.initGLBuffers();
};