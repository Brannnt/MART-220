
//onion
var speedX1 = 70;
var speedY1 = 160;
//tomato
var speedX2 = 200;
var speedY2 = 140;
//lettuce
var speedX3 = 50;
var speedY3 = 130;
var speedX3a = 350;
var speedY3a = 130;
var speedX3b = 200;
var speedY3b = 150;
//cheeze
var speedX4 = 50;
var speedY4 = 185;
var speedX4a = 350;
var speedY4a = 185;
var speedX4b = 200;
var speedY4b = 220;
//bottom bun
var speedX5 = 50;
var speedY5 = 255;
//top bun
var speedX6 = 50;
var speedY6 = 30;

var img, img2, img3;
var img3x = 25;
var img3y = 275;
var img3xspeed = 3;
var img3yspeed =2;
var timerValue = 10;

let myFont;

function preload() {
  img = loadImage('Images/Gemini-explosion.jpg');
  img2 = loadImage('Images/Gemini-fries.jpg');
  img3 = loadImage('Images/Gemini-Ketchup.jpg');
  myFont = loadFont('Fonts/Sixtyfour-Regular.ttf');
}

function setup() {
    createCanvas(400,400);
    setInterval(timeIt, 1000);
}
function draw() {
  background(250,50,50)
  image(img, 0, 0, width, height);

  //meat
fill(150,75,0);
rect(60,185,280,70);
  //onion
fill(200,200,200);
rect(speedX1,speedY1,260,25);
    //tomato
fill(200,50,50);
ellipse(speedX2,speedY2,250,60);
//lettuce
fill(100,200,100);
triangle(speedX3,speedY3, speedX3a, speedY3a, speedX3b, speedY3b);
//cheeze
fill(240,240,20);
triangle(speedX4,speedY4, speedX4a, speedY4a, speedX4b, speedY4b);
//bottom bun
fill(200,120,70);
rect(speedX5,speedY5,300,80);
//top bun
fill(200,120,70);
rect(speedX6,speedY6,300,100);

image(img2, 275, 275, 100, 100);
image(img3, img3x, img3y, 100, 100);
img3x += img3xspeed;
img3y += img3yspeed;

if (img3x >= width-100){
  img3xspeed*=-1;
}
if (img3x <= 0){
  img3xspeed*=-1;
}
if (img3y >= height-100){
  img3yspeed*=-1;
}
if (img3y <= 0){
  img3yspeed*=-1;
}


fill(0);
textFont(myFont);
textSize(14);
text("Brannt Fahrney",200,385 );

fill(250, 189, 35);
textSize(20);

text("Exploding Burger", 10, 20);
fill(0)
if (timerValue >= 10) {
  text("0:" + timerValue, 10, height-10);
}
if (timerValue < 10) {
  text('0:0' + timerValue, 10, height-10);
}
if (timerValue == 0) {
  text('game over', (width / 2)-90, height / 2 + 15);
}
  } 

function timeIt() {
    if (timerValue > 0) {
      timerValue--;
    }
    if (timerValue <= 0){
      img3xspeed*=1.1;
    }
  }

function mouseMoved(){
  //onion
  speedX1 += -5
  speedY1 += 5
  //tomato
  speedX2 += 3
  speedY2 += -3
  //lettuce
  speedX3 += -3
  speedY3 += -3
  speedX3a += -3
  speedY3a += -3
  speedX3b += -3
  speedY3b += -3
  //cheeze
  speedX4 += 6
  speedY4 += 5
  speedX4a += 6
  speedY4a += 5
  speedX4b += 6
  speedY4b += 5
  //bottom bun
  speedX5 += -1
  speedY5 += 3
  //top bun
  speedX6 += 1
  speedY6 += -3
}

function mouseClicked(){
  //onion
speedX1 = 70;
speedY1 = 160;
//tomato
speedX2 = 200;
speedY2 = 140;
//lettuce
speedX3 = 50;
speedY3 = 130;
speedX3a = 350;
speedY3a = 130;
speedX3b = 200;
speedY3b = 150;
//cheeze
 speedX4 = 50;
speedY4 = 185;
speedX4a = 350;
speedY4a = 185;
 speedX4b = 200;
speedY4b = 220;
//bottom bun
speedX5 = 50;
speedY5 = 255;
//top bun
speedX6 = 50;
speedY6 = 30;
}

