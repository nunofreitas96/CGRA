/**
 * MyClock
 * @constructor
 */
 function MyClock(scene) {
 	CGFobject.call(this,scene);

	this.hours = 0;
	this.minutes = 0;
	this.seconds = 0;

	this.cili = new MyCilinder(this.scene,12,1);
	this.tampo = new MyCircle(this.scene,12);
	this.ponth = new MyClockHand(this.scene);
	this.tampo.initBuffers();
    this.cili.initBuffers();

    this.clockAppearance = new CGFappearance(this.scene);
	this.clockAppearance.setAmbient(1,1,1,1);
	this.clockAppearance.setDiffuse(10,10,10,1);
	this.clockAppearance.setSpecular(0.3,0.3,0.3,1);
	this.clockAppearance.setShininess(0.2,0.2,0.2,1);
	this.clockAppearance.loadTexture("clock.png");
 };

 MyClock.prototype = Object.create(CGFobject.prototype);
 MyClock.prototype.constructor = MyClock;

MyClock.prototype.display = function()
{
	var degToRad = Math.PI / 180.0;
	var hangle = (360/12)*degToRad;
	var mangle = (360/60)*degToRad;
	var sangle = (360/60)*degToRad;
	var hfactor = 0.8;
	var mfactor = 0.6;
	var sfactor = 0.9;

	this.scene.scale(0.6,0.6,0.3);
	
	this.scene.pushMatrix();
		this.cili.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.rotate(-hangle*this.hours,0,0,1);
		this.scene.scale(1,hfactor,1);
    	this.scene.translate(0,0.5,1.05);
    	this.ponth.display();
    this.scene.popMatrix();

    this.scene.pushMatrix();
		this.scene.rotate(-mangle*this.minutes,0,0,1);
		this.scene.scale(1,mfactor,1);
    	this.scene.translate(0,0.5,1.05);
    	this.ponth.display();
    this.scene.popMatrix();

    this.scene.pushMatrix();
		this.scene.rotate(-sangle*this.seconds,0,0,1);
		this.scene.scale(1,sfactor,1);
    	this.scene.translate(0,0.5,1.05);
    	this.ponth.display();
    this.scene.popMatrix();

	this.scene.pushMatrix();
    	this.scene.translate(0,0,1);
    	this.clockAppearance.apply();
    	this.tampo.display();
    this.scene.popMatrix();

};

MyClock.prototype.update = function(currtime) { //time in ms
	currtime = Math.round(currtime/1000);
	currtime += 3600;
	var days,months,years;
	/*year = currtime%31556926;
	currtime -= year;
	month = ;*/
	var days = Math.trunc(currtime/86400);
	currtime -= days*86400;
	this.hours = currtime/3600;
	currtime -= Math.trunc(this.hours)*3600;
	this.minutes = currtime/60;
	currtime -= Math.trunc(this.minutes)*60;
	this.seconds = currtime;
	//console.log(this.hours);
	//console.log(this.minutes);
	//console.log(this.seconds);
}