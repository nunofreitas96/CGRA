var degToRad = Math.PI / 180.0;

var BOARD_WIDTH = 6.0;
var BOARD_HEIGHT = 4.0;

var BOARD_A_DIVISIONS = 30;
var BOARD_B_DIVISIONS = 100;

function LightingScene() {
	CGFscene.call(this);
}

LightingScene.prototype = Object.create(CGFscene.prototype);
LightingScene.prototype.constructor = LightingScene;

LightingScene.prototype.update = function(currtime){
	this.clock.update(currtime);
	this.drone.update(currtime);

}

LightingScene.prototype.init = function(application) {
	CGFscene.prototype.init.call(this, application);

	this.initCameras();

	this.initLights();
	this.enableTextures(true);
	this.gl.clearColor(0.0, 0.0, 0.0, 1.0);
	this.gl.clearDepth(100.0);
	this.gl.enable(this.gl.DEPTH_TEST);
	this.gl.enable(this.gl.CULL_FACE);
	this.gl.depthFunc(this.gl.LEQUAL);

	this.axis = new CGFaxis(this);

	// Scene elements
	this.table = new MyTable(this);
	this.wall = new Plane(this,4);
	this.lwall = new MyQuad(this, -1,2,-1,2);
	this.floor = new MyQuad(this,0,12,0,10);
	this.clock = new MyClock(this);
	this.drone = new MyDrone(this);
	this.semicircle = new MySCircle(this);
	
	this.boardA = new Plane(this, BOARD_A_DIVISIONS,0,1,0,1);
	this.boardB = new Plane(this, BOARD_B_DIVISIONS,0,1,0,1);

	// Materials
	this.materialDefault = new CGFappearance(this);
	this.tableAppearance = new CGFappearance(this)

	this.tableAppearance.setAmbient(1,1,1,1);
	this.tableAppearance.setDiffuse(10,10,10,1);
	this.tableAppearance.setSpecular(0.3,0.3,0.3,1);
	this.tableAppearance.setShininess(0.2,0.2,0.2,1);
	this.tableAppearance.loadTexture("table.png");


	this.floorAppearance = new CGFappearance(this);
	this.floorAppearance.setAmbient(1,1,1,1);
	this.floorAppearance.setDiffuse(10,10,10,1);
	this.floorAppearance.setSpecular(0.3,0.3,0.3,1);
	this.floorAppearance.setShininess(0.2,0.2,0.2,1);
	this.floorAppearance.loadTexture("floor.png");


	this.lwallAppearance = new CGFappearance(this);
	this.lwallAppearance.setAmbient(1,1,1,1);
	this.lwallAppearance.setDiffuse(10,10,10,1);
	this.lwallAppearance.setSpecular(0.3,0.3,0.3,1);
	this.lwallAppearance.setShininess(0.2,0.2,0.2,1);
	this.lwallAppearance.setTextureWrap("CLAMP_TO_EDGE","CLAMP_TO_EDGE");
	this.lwallAppearance.loadTexture("window.png");

	this.slidesAppearance = new CGFappearance(this);
	this.slidesAppearance.setAmbient(1,1,1,1);
	this.slidesAppearance.setDiffuse(10,10,10,1);
	this.slidesAppearance.setSpecular(0.3,0.3,0.3,1);
	this.slidesAppearance.setShininess(0.2,0.2,0.2,1);
	this.slidesAppearance.loadTexture("slides.png");

	this.boardAppearance = new CGFappearance(this);
	this.boardAppearance.setAmbient(1,1,1,1);
	this.boardAppearance.setDiffuse(1,1,1,1);
	this.boardAppearance.setSpecular(3,3,3,1);
	this.boardAppearance.setShininess(20,20,20,1);
	this.boardAppearance.loadTexture("board.png");
	
	this.materialA = new CGFappearance(this);
	this.materialA.setAmbient(0.3,0.3,0.3,1);
	this.materialA.setDiffuse(0.6,0.6,0.6,1);
	this.materialA.setSpecular(0,0,0.8,1);
	this.materialA.setShininess(120);

	this.materialB = new CGFappearance(this);
	this.materialB.setAmbient(0.3,0.3,0.3,1);
	this.materialB.setDiffuse(0.6,0.6,0.6,1);
	this.materialB.setSpecular(0.8,0.8,0.8,1);	
	this.materialB.setShininess(120);
	
	this.setUpdatePeriod(1);
};

LightingScene.prototype.initCameras = function() {
	this.camera = new CGFcamera(0.4, 0.1, 500, vec3.fromValues(30, 30, 30), vec3.fromValues(0, 0, 0));
};

LightingScene.prototype.initLights = function() {
	this.setGlobalAmbientLight(0,0,0, 1.0);
	
	// Positions for four lights
	this.lights[0].setPosition(4, 6, 1, 1);
	this.lights[0].setVisible(true); // show marker on light position (different from enabled)
	
	this.lights[1].setPosition(10.5, 6.0, 1.0, 1.0);
	this.lights[1].setVisible(true); // show marker on light position (different from enabled)

	//this.lights[2].setPosition(10.5, 6.0, 5.0, 1.0);
	//this.lights[1].setVisible(true); // show marker on light position (different from enabled)
	//this.lights[3].setPosition(4, 6.0, 5.0, 1.0);
	//this.lights[1].setVisible(true); // show marker on light position (different from enabled)

	this.lights[0].setAmbient(0, 0, 0, 1);
	this.lights[0].setDiffuse(1.0, 1.0, 1.0, 1.0);
	this.lights[0].setSpecular(1,1, 1 ,1);
	this.lights[0].enable();

	this.lights[1].setAmbient(0, 0, 0, 1);
	this.lights[1].setDiffuse(1.0, 1.0, 1.0, 1.0);
	this.lights[1].enable();
};

LightingScene.prototype.updateLights = function() {
	for (i = 0; i < this.lights.length; i++)
		this.lights[i].update();
}


LightingScene.prototype.display = function() {
	// ---- BEGIN Background, camera and axis setup

	// Clear image and depth buffer everytime we update the scene
	this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height);
	this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);

	// Initialize Model-View matrix as identity (no transformation)
	this.updateProjectionMatrix();
	this.loadIdentity();

	// Apply transformations corresponding to the camera position relative to the origin
	this.applyViewMatrix();

	// Update all lights used
	this.updateLights();

	// Draw axis
	this.axis.display();

	this.materialDefault.apply();

	// ---- END Background, camera and axis setup

	
	// ---- BEGIN Geometric transformation section

	// ---- END Geometric transformation section


	// ---- BEGIN Primitive drawing section

	// Floor
	this.pushMatrix();
		this.floorAppearance.apply();
		this.translate(7.5, 0, 7.5);
		this.rotate(-90 * degToRad, 1, 0, 0);
		this.scale(15, 15, 0.2);
		this.floor.display();
		this.materialDefault.apply();
	this.popMatrix();

	// Left Wall
	this.pushMatrix();

		this.lwallAppearance.apply();
		this.translate(0, 4, 7.5);
		this.rotate(90 * degToRad, 0, 1, 0);
		this.scale(15, 8, 0.2);
		this.lwall.display();
		this.materialDefault.apply();
	this.popMatrix();

	// Plane Wall
	this.pushMatrix();
		this.translate(7.5, 4, 0);
		this.scale(15, 8, 0.2);
		this.wall.display();
	this.popMatrix();
	
	//Semi-Circle Test
	this.pushMatrix();
		this.scale(5,5,5);
		this.semicircle.display();
	this.popMatrix();

	// First Table
	this.pushMatrix();
		
		this.translate(5, 0, 8);
		this.tableAppearance.apply();
		this.table.display();
		this.materialDefault.apply();
	this.popMatrix();

	// Second Table
	this.pushMatrix();
	this.tableAppearance.apply();
		this.translate(12, 0, 8);
		this.table.display();
		this.materialDefault.apply();
	this.popMatrix();

	// Board A
	this.pushMatrix();
		this.translate(4, 4.5, 0.2);
		//this.scale(BOARD_WIDTH, BOARD_HEIGHT, 1);
		this.scale(BOARD_WIDTH, BOARD_HEIGHT, 1);
		this.slidesAppearance.apply();
		this.boardA.display();
	this.popMatrix();

	// Board B
	this.pushMatrix();
		this.translate(10.5, 4.5, 0.2);
		this.scale(BOARD_WIDTH, BOARD_HEIGHT, 1);
		
		this.boardAppearance.apply();
		this.boardB.display();
	this.popMatrix();

	//Clock
	this.pushMatrix();
		this.materialDefault.apply();
		this.translate(7.3,7.3,0.2);
		this.clock.display();
	this.popMatrix();

	//Drone
	this.pushMatrix();
		this.materialDefault.apply();
		
		this.drone.display();
	this.popMatrix();

	// ---- END Primitive drawing section
};

LightingScene.prototype.moveDrone = function(char){

	this.drone.moveIt(char);

 };
