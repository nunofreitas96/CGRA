function MySCircle(scene) {
	CGFobject.call(this,scene);

	this.slices = 1000;
	
	this.initBuffers();
};

MySCircle.prototype = Object.create(CGFobject.prototype);
MySCircle.prototype.constructor = MySCircle;

MySCircle.prototype.initBuffers = function() {

	this.vertices = [];
	this.normals = [];
	this.indices = [];
	

	this.angle = Math.PI/this.slices;
	
	

	for (i = 0; i <= this.slices+1; i++) {
		this.vertices.push(Math.cos(this.angle*i),Math.sin(this.angle*i),0);
		this.vertices.push(Math.cos(this.angle*i)+0.05,Math.sin(this.angle*i)+0.05,0);
		this.normals.push(0,0,1);
		var textCS = (Math.cos(this.angle*i)+1)/2;
		var textCT = (Math.sin(this.angle*i+Math.PI)+1)/2;
		
	}
	for (i=0;i<this.slices-1;i++){
		this.indices.push(i+1,i,i+2);
		this.indices.push(i+2,i+3,i+1);
	}
	

	this.primitiveType = this.scene.gl.TRIANGLES;
	this.initGLBuffers();
}