var img;
var timeInterval='7.21-7.28';
var timeColor = '#53C1F5';
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
  img = loadImage('AI_sales.png');
  particle = {
    1: loadImage('../particles/sales/1.png'),
    2: loadImage('../particles/sales/2.png'),
    3: loadImage('../particles/sales/3.png'),
    4: loadImage('../particles/sales/4.png'),
    5: loadImage('../particles/sales/5.png'),
    6: loadImage('../particles/sales/6.png'),
  }
}



function setup() {
	createCanvas(1128, 640);

	medicalColor_H=random(60,70);
    medicalColor_S=random(85,90);
    medicalColor_B=random(50,55);


    colorMode(HSB,100);
	var medicalColor=color(medicalColor_H,medicalColor_S,medicalColor_B);
	background(medicalColor);

	smooth();

	centerX = random(500,628);
    centerY = random(280,360);
    radius = random(1300,1800);
    angleMode(DEGREES);
    lineH = random(60,70);
    lineS = 90;
    lineB = 90;
    lineA = 40;
	// drawParticle1();
	//image(img, 0, 0, 1128, 640);

}

function draw() {
	frameRate(60);

	noFill();
	var lineColor=color(lineH,lineS,lineB,lineA);
	stroke(lineColor, .5);
   beginShape();
    for (var i = -200; i <= totalDegrees; i++) {
      var noiseFactor = noise(i / 70, frameCount / 120);
      var x = centerX + radius * cos(i) * noiseFactor;
      var y = centerY + radius * sin(i) * noiseFactor;
      curveVertex(x, y);
    }
  endShape(CLOSE);
  radius -= 7;
  lineA -= 0.15;

	if(updateFlag)
	{
		updateFlag = false;
		    radius = random(1300,1800);
			    lineA = 40;
		clear();
		var medicalColor=color(medicalColor_H,medicalColor_S,medicalColor_B);
		background(medicalColor);
    drawParticle();
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
	medicalColor_H=random(60,70);
    medicalColor_S=random(85,90);
    medicalColor_B=random(50,55);
	updateFlag = true;
	loop();
}

function drawParticle(){
  for (var i = 0; i < 10; i++) {
    var particleNum= parseInt(random(1,6));
    var particleSize=random(0.5,3);
    var particleX=random(0,1128);
    var particleY=random(0,640);
    image(particle[particleNum],particleX,particleY, 20*particleSize, 20*particleSize);
  }
}
