/**
 * MyPrism
 * @constructor
 */
 function MyPrism(scene, slices, stacks) {
 	CGFobject.call(this,scene);
	
	this.slices = slices;
	this.stacks = stacks;

 	this.initBuffers();
 };

 MyPrism.prototype = Object.create(CGFobject.prototype);
 MyPrism.prototype.constructor = MyPrism;

 MyPrism.prototype.initBuffers = function() {
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
    		this.vertices.push(Math.cos(this.angle*i),Math.sin(this.angle*i),(1/this.stacks)*j);
    		var currangle = this.angle*(i-1)+this.angle/2;
    		this.normals.push(Math.cos(currangle),Math.sin(currangle),0);
		}
	}
	/*//tampo de baixo
	for (i = 1; i < this.slices*2-1; i+=2) {
		this.indices.push(i+2,0,i);
		this.indices.push(i,0,i+2);
	}
	this.indices.push(1,0,this.slices*2-1);
	this.indices.push(this.slices*2-1,0,1);*/

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

	/*//lados de dentro
	//lados de fora
	for (i=1;i<=this.slices*2-3;i+=2){
		this.indices.push(i,i+1,i+3);
		this.indices.push(i+3,i+2,i);
	}*/

 	this.primitiveType = this.scene.gl.TRIANGLES;
 	this.initGLBuffers();
 };
