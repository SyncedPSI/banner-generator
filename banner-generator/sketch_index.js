//var bannerName=select("#bannerName");
//var bannerName='第 '+' 期';

var volNum = 5;
var timeInterval = "7.21-7.28";
var mainColor_H=0;
var mainColor_S=0;
var mainColor_B=0;


function onBannerNumberChange()
{

	volNum = int(document.getElementById("bannerNumber").value);
	if ( isNaN(volNum) )
	{
		volNum = 0;
	}
}


function onBannerTimeSplit() {
    timeInterval = document.getElementById("bannerTime").value;

}

function romdanColor(){

}
function setup() {
	createCanvas(1128, 640);
	colorMode(HSB,100);
	mainColor_H=random(0,100);
    mainColor_S=random(20,50);
    mainColor_B=random(90,100);
    var mainColor=color(mainColor_H,mainColor_S,mainColor_B);
    var buildingColor_H=mainColor_H+random(10,15);
    var buildingColor_S=mainColor_S+random(10);
    var buildingColor=color(buildingColor_H,buildingColor_S,random(90,100));
    var detailColor=color(mainColor_H+random(10,15),mainColor_S+random(10),random(40,50));
    var shadowA = lerpColor(buildingColor, detailColor, 0.33);
    var shadowB = lerpColor(buildingColor, detailColor, 0.66);
    background(mainColor);

	fill(255,50);
	noStroke();
	rect(55,180,550,280);

    var buildingH = random(100,500);
    var buildingW = random(80,200);
    var buildingL = random(50,150);

	translate(900, (800-buildingH)/2);
	fill(shadowA);
	rect(-buildingW, 0, buildingW,buildingH);
	fill(detailColor);

	var windowRow_A = int(random(0,7));
	var windowCol_A = int(random(0,7));
	var gapRow = random(10,20);
	var gapCol = random(10,20);
	for (var x = -buildingW+gapCol; x < -gapCol; x+=(buildingW-gapCol)/windowRow_A) {
		for (var y = +gapRow; y < buildingH-gapRow; y+=(buildingH-gapRow)/windowCol_A){
			rect(x,y,(buildingW-gapCol)/windowRow_A-gapCol,(buildingH-gapRow)/windowCol_A-gapRow);
		}

	}
	//rect(780,100,20,50);
	shearY(-PI / 4.0);
	//shearX(-PI / 8.0);
	fill(shadowB);
	rect(0, 0, buildingL, buildingH);
    fill(detailColor);
	var windowCol_B = int(random(-1,1))+windowCol_A;
	for (var x = gapCol; x < buildingL-gapCol; x+=(buildingL-gapCol)/windowRow_A) {
		for (var y = +gapRow; y < buildingH-gapRow; y+=(buildingH-gapRow)/windowCol_B){
			rect(x,y,(buildingL-gapCol)/windowRow_A-gapCol,(buildingH-gapRow)/windowCol_B-gapRow);
		}

	}
	shearY(PI / 4.0);
	shearX(-PI / 4.0);
	fill(buildingColor);
	rect(-buildingW,-buildingL,buildingW,buildingL);
	// for (var x = gapCol; x < buildingL-gapCol; x+=(buildingL-gapCol)/windowRow_A) {
	// 	for (var y = +gapRow; y < buildingH-gapRow; y+=(buildingH-gapRow)/windowCol_B){
	// 		rect(x,y,(buildingL-gapCol)/windowRow_A-gapCol,(buildingH-gapRow)/windowCol_B-gapRow);
	// 	}

	// }
	// shearY(PI / 4.0);
	// shearX(-PI / 4.0);
	// fill(buildingColor);
	// rect(-buildingW,-buildingL,buildingW,buildingL);
}

function draw() {
	var tmpcolor = color(mainColor_H,mainColor_S/2,mainColor_B);
	fill(tmpcolor);
	noStroke();
	rect(55,180,550,280);
	drawText();
	frameRate(6);

}

function drawText(){
	var bannerName='第 ' + str(volNum) + ' 期';
	var bannerTime= timeInterval;
	fill(0);
	textFont('Pingfang SC');
	textSize(90);
	textStyle(BOLD);
	textAlign(CENTER);
	text(bannerName,326,320);
	textFont('DIN Alternate');
	textSize(55);
	textStyle(BOLD);
	for (var i = 0; i <= bannerTime.length-1; i++) {
		text(bannerTime.charAt(i),208+270*i/bannerTime.length,400);
	}
}
