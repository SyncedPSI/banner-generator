var img;
var timeInterval = '7.21-7.28';
var bannerYear = '2018';
var updateFlag = true;

var financeColor_H = 0;
var financeColor_S = 0;
var financeColor_B = 0;
var start = 0;
var ystart = 0;

var particleNum = 0;

var particleParams = [];



function onBannerTimeSplit() {
    updateFlag = true;
    timeInterval = document.getElementById("bannerTime").value;
}

function onBannerYearChange() {
    updateFlag = true;
    bannerYear = document.getElementById("bannerYear").value;
}

function preload() {
    img = loadImage('AI_Finance.png');
    particle1 = loadImage('../particles/finace.png');
}

function setup() {
    createCanvas(1128, 640);
    financeColor_H = random(5, 10);
    financeColor_S = random(80, 95);
    financeColor_B = random(90, 100);
    xstart = random(10);
    ystart = random(10);



    particleNum = random(4, 8);
    particleParams = new Array(floor(particleNum)+1);
    for (var i = 0; i < particleNum; i++) {
		particleParams[i] = new Array(3);
        particleParams[i][0] = random(0.5, 3);
        particleParams[i][1] = random(0, 1128);
        particleParams[i][2] = random(0, 640);
        //image(particle1, particleParams[i][1], particleParams[i][2], 69 * particleParams[i][0], 160 * particleParams[i][0]);
    }

}

function draw() {
    //clear()
    if (updateFlag) {
        console.log("here");
        updateFlag = false;
        clear();
        colorMode(HSB, 100);
        var financeColor = color(financeColor_H, financeColor_S, financeColor_B);
        background(financeColor);
        smooth();
        ynoise = ystart;
        for (var y = 0; y <= height; y += 20) {
            ynoise += 0.2;
            xnoise = xstart;
            for (var x = 0; x <= width; x += 20) {
                xnoise += 0.2;
                drawPoint(x, y, noise(xnoise, ynoise));
            }
        }

        drawParticle1();
        image(img, 0, 0, 1128, 640);

    }
    noStroke();
    drawText();
    frameRate(60);
}

function drawText() {
    var yearNumber = bannerYear;
    fill(255);
    textSize(28);
    textFont('DIN Alternate');
    for (var i = 0; i <= yearNumber.length - 1; i++) {
        text(yearNumber.charAt(i), 925 + 95 * i / yearNumber.length, 235);
    }
    textSize(70);
    textStyle(BOLD);
    fill(color('#FFF459'));
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

function drawParticle1() {
    for (var i = 0; i < particleNum; i++) {

        image(particle1, particleParams[i][1], particleParams[i][2], 100 * particleParams[i][0], 100 * particleParams[i][0]);
    }
}

function changeColor() {
	financeColor_H = random(5, 10);
    financeColor_S = random(80, 95);
    financeColor_B = random(90, 100);
	updateFlag = true;
}

function drawPoint(x, y, noiseFactor) {
    push();
    translate(x, y);
    rotate(noiseFactor * radians(360));
    colorMode(HSB);
    stroke(10, 50, 138, 50);
    line(0, 0, 20, 0);
    pop();
}
