/**
 * MyInterface
 * @constructor
 */


function MyInterface() {
	//call CGFinterface constructor 
	CGFinterface.call(this);
};

MyInterface.prototype = Object.create(CGFinterface.prototype);
MyInterface.prototype.constructor = MyInterface;

/**
 * init
 * @param {CGFapplication} application
 */
MyInterface.prototype.init = function (application) {
	// call CGFinterface init
	CGFinterface.prototype.init.call(this, application);

	// init GUI. For more information on the methods, check:
	//  http://workshop.chromeexperiments.com/examples/gui

	this.gui = new dat.GUI();

	// add a button:
	// the first parameter is the object that is being controlled (in this case the scene)
	// the identifier 'doSomething' must be a function declared as part of that object (i.e. a member of the scene class)
	// e.g. LightingScene.prototype.doSomething = function () { console.log("Doing something..."); }; 
    /*
	this.gui.add(this.scene, 'doSomething');	

	// add a group of controls (and open/expand by defult)
	
	var group=this.gui.addFolder("Options");
	group.open();

	// add two check boxes to the group. The identifiers must be members variables of the scene initialized in scene.init as boolean
	// e.g. this.option1=true; this.option2=false;
	
	group.add(this.scene, 'option1');
	group.add(this.scene, 'option2');
	
	// add a slider
	// must be a numeric variable of the scene, initialized in scene.init e.g.
	// this.speed=3;
	// min and max values can be specified as parameters
	
	this.gui.add(this.scene, 'speed', -5, 5);
*/
	return true;
};

/**
 * processKeyUp
 * @param event {Event}
 */
MyInterface.prototype.processKeyUp = function (event) {
	// call CGFinterface default code (omit if you want to override)
	CGFinterface.prototype.processKeyUp.call(this, event);

	switch (String.fromCharCode(event.keyCode).toLowerCase()) {
		case ('a'):
			this.scene.moveDrone(7);
			break;
		case ('d'):
			this.scene.moveDrone(8);
			break;
		case ('s'):
			this.scene.moveDrone(9);
			break;
		case ('w'):
			this.scene.moveDrone(10);
			break;
		case ('i'):
			this.scene.moveDrone(11);
			break;
		case ('j'):
			this.scene.moveDrone(12);
			break;
	};
};
/**
 * processKeyDown
 * @param event {Event}
 */
MyInterface.prototype.processKeyDown = function (event) {
	CGFinterface.prototype.processKeyDown.call(this, event);
	switch (String.fromCharCode(event.keyCode).toLowerCase()) {
		case ('a'):
			this.scene.moveDrone(1);
			break;
		case ('d'):
			this.scene.moveDrone(2);
			break;
		case ('w'):
			this.scene.moveDrone(3);
			break;
		case ('s'):
			this.scene.moveDrone(4);
			break;
		case ('i'):
			this.scene.moveDrone(5);
			break;
		case ('j'):
			this.scene.moveDrone(6);
			break;
	};
}