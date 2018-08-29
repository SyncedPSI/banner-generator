var img;
var timeInterval='7.21-7.28';
var timeColor = '#FF0033';
var bannerYear='2018';
var centerX;
var centerY;
var radius;
var totalDegrees = 180;
var lineH;
var lineB;
var lineS;
var lineA;

var medicalColor_H=0;
var medicalColor_S=0;
var medicalColor_B=0;

var updateFlag = true;


function onBannerTimeSplit()
{
	timeInterval = document.getElementById("bannerTime").value;
	updateFlag = true;

	loop();

}

function onBannerYearChange()
{
	bannerYear = document.getElementById("bannerYear").value;
	updateFlag = true;

	loop();
}

function preload() {
  img = loadImage('AI_medical.png');
  particle1=loadImage('particle1.png');
}



function setup() {
	createCanvas(1128, 640);

	medicalColor_H=random(90,100);
    medicalColor_S=random(35,40);
    medicalColor_B=random(15,25);


    colorMode(HSB,100);
	var medicalColor=color(medicalColor_H,medicalColor_S,medicalColor_B);
	background(medicalColor);

	smooth();

	centerX = random(500,628);
    centerY = random(280,360);
    radius = random(1300,1800);
    angleMode(DEGREES);
    lineH = random(0,3);
    lineS = 90;
    lineB = 80;
    lineA = 20;
	// drawParticle1();
	//image(img, 0, 0, 1128, 640);

}

function draw() {
	frameRate(60);

	noFill();
	var lineColor=color(lineH,lineS,lineB,lineA);
	stroke(lineColor);
   beginShape();
    for (var i = -200; i <= totalDegrees; i++) {
      var noiseFactor = noise(i / 70, frameCount / 120);
      var x = centerX + radius * cos(i) * noiseFactor;
      var y = centerY + radius * sin(i) * noiseFactor;
      curveVertex(x, y);
    }
  endShape(CLOSE);
  radius -= 7;
  lineA -= 0.2;

	if(updateFlag)
	{
		updateFlag = false;
		    radius = random(1300,1800);
			    lineA = 20;
		clear();
		var medicalColor=color(medicalColor_H,medicalColor_S,medicalColor_B);
		background(medicalColor);
	}

	if (radius < 50)
	{
		drawText();
	image(img, 0, 0, 1128, 640);
	noLoop();
	}
}



function drawText(){
	noStroke();
	var yearNumber=bannerYear;
	fill(255);
	textSize(28);
	textFont('DIN Alternate');
	for (var i = 0; i <= yearNumber.length-1; i++) {
		text(yearNumber.charAt(i),925+95*i/yearNumber.length,235);
	}

	textSize(70);
	textStyle(BOLD);
	fill(color(timeColor));
	if(timeInterval.length == 0)
	{
		return;
	}
	var dates = timeInterval.split(/[-]/);
	if(dates.length < 2)
	{
		return;
	}
	var timeFrom = timeInterval.split(/[-]/)[0];
	var timeTo = timeInterval.split(/[-]/)[1];
	if (timeFrom.length == 0 || timeTo.length == 0)
	{
		return;
	}
	for (var i = timeFrom.length - 1; i >= 0; i--) {
		text(timeFrom.charAt(i),
		1020 - 35*( timeFrom.length - i ), 335);
	}
	for (var i = timeTo.length - 1; i >= 0; i--) {
		text(timeTo.charAt(i), 1020 - 35*( timeTo.length - i ), 455);
	}

}

function changeColor() {
	medicalColor_H=random(90,100);
    medicalColor_S=random(35,40);
    medicalColor_B=random(15,25);
	updateFlag = true;
	loop();
}

// function drawParticle1(){
// 	var particleNum=random(2,5);
// 	for (var i = 0; i < particleNum; i++) {
// 		var particleSize=random(0.5,3);
// 		var particleX=random(0,1128);
// 		var particleY=random(0,640);
// 		image(particle1,particleX,particleY,69*particleSize,160*particleSize);
// 	}
// }
