/**
 * MyLamp
 * @constructor
 */
 function MyLamp(scene, slices, stacks) {
 	CGFobject.call(this,scene);
	
	this.slices = slices;
	this.stacks = stacks;

 	this.initBuffers();
 };

 MyLamp.prototype = Object.create(CGFobject.prototype);
 MyLamp.prototype.constructor = MyLamp;

 MyLamp.prototype.initBuffers = function() {
 	/*
 	* TODO:
 	* Replace the following lines in order to build a prism with a **single mesh**.
 	*
 	* How can the vertices, indices and normals arrays be defined to
 	* build a prism with varying number of slices and stacks?
 	*/

	this.vertices = [];
	this.normals = [];
	this.indices = [];

	this.angle = Math.PI*2/this.slices;

	for (j=0;j<=this.stacks;j++) {
		for (i = 1; i <= this.slices; i++) {
			var zangle = this.angle*i;
			var hangle = j*(Math.PI/2)/this.stacks;
			var x = Math.sin(zangle) * Math.sin(hangle);
			var y = Math.cos(zangle) * Math.sin(hangle);
			var z = Math.cos(hangle);
    		this.vertices.push(x,y,z);
    		var k = 1-j/this.stacks;
    		var currangle = this.angle*(i-1)+this.angle/2;
    		var prevangle = this.angle*(i-2)+this.angle/2;
    		this.normals.push(x,y,z);
		}
	}
	
	//lados de fora
	for (j=0;j<this.stacks;j++){
		for (i=0;i<this.slices-1;i++){
			var a = i+(j*this.slices);
			var b = i+((j+1)*this.slices);
			var c = i+1+(j*this.slices);
			var d = i+1+((j+1)*this.slices);
			this.indices.push(d,b,a);
			this.indices.push(a,c,d);
		}
		var a = j*this.slices;
		var b = (j+1)*this.slices;
		var c = a+this.slices-1;
		var d = b+this.slices-1;
		this.indices.push(d,c,a);
		this.indices.push(a,b,d);
	}

 	this.primitiveType = this.scene.gl.TRIANGLES;
 	this.initGLBuffers();
 };
