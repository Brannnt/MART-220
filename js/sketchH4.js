
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

//food images
var foodObject = [];
var friesX, friesY;
//var img, img3;
var img3x = 25;
var img3y = 275;
var xspeed = 3;
var yspeed = 2;
var timerValue = 10;

var xImage = 140, yImage = 150;
var i = 0;
var idleCycle = [];
var idle1, idle2, idle3, idle4, idle5, idle6, idle7, idle8, idle9, idle10;
var rectangleObject = [];

let myFont;

function preload() {
  foodObject[0] = loadImage('Images/Gemini-explosion.jpg');

  foodObject[1] = loadImage('Images/Gemini-fries.jpg');
  //foodObject[2] = loadImage('Images/Gemini-Ketchup.jpg');
  img3 = loadImage('Images/Gemini-Ketchup.jpg');
  myFont = loadFont('Fonts/Sixtyfour-Regular.ttf');
}

function setup() {
  createCanvas(400, 400);
  setInterval(timeIt, 1000);

  for (var k = 0; k < 10; k++) {
    ("Images/Idle (" + (k + 1) + ").png");
    idleCycle[k] = new myCharacter("Images/Idle (" + (k + 1) + ").png", 140, 150, 100, 100);
  }
  for (var i = 0; i < idleCycle.length; i++) {
  }
  setInterval(changeTime, 100);
  //french fries
  friesX = random(0, width - 100);
  friesY = random(0, height - 100);
}
function draw() {
  background(250, 50, 50);
 // image(img, 0, 0, width, height);
 image(foodObject[0], 0, 0, width, height);
  //meat
  fill(150, 75, 0);
  rect(60, 185, 280, 70);
  //onion
  fill(200, 200, 200);
  rect(speedX1, speedY1, 260, 25);
  //tomato
  fill(200, 50, 50);
  ellipse(speedX2, speedY2, 250, 60);
  //lettuce
  fill(100, 200, 100);
  triangle(speedX3, speedY3, speedX3a, speedY3a, speedX3b, speedY3b);
  //cheeze
  fill(240, 240, 20);
  triangle(speedX4, speedY4, speedX4a, speedY4a, speedX4b, speedY4b);
  //bottom bun
  fill(200, 120, 70);
  rect(speedX5, speedY5, 300, 80);
  //top bun
  fill(200, 120, 70);
  rect(speedX6, speedY6, 300, 100);


  image(foodObject[1], friesX, friesY, 100, 100);
  //image(foodObject[2],25,275,100,100);
  image(img3, img3x, img3y, 100, 100);
  img3x += xspeed;
  img3y += yspeed;


  if (img3x >= width - 100) {
    xspeed *= -1;
  }
  if (img3x <= 0) {
    xspeed *= -1;
  }
  if (img3y >= height - 100) {
    yspeed *= -1;
  }
  if (img3y <= 0) {
    yspeed *= -1;
  }

  fill(0);
  textFont(myFont);
  textSize(14);
  text("Brannt Fahrney", 200, 385);

  fill(250, 189, 35);
  textSize(20);

  text("Exploding Burger", 10, 20);
  fill(0)
  if (timerValue >= 10) {
    text("0:" + timerValue, 10, height - 10);
  }
  if (timerValue < 10) {
    text('0:0' + timerValue, 10, height - 10);
  }
  if (timerValue == 0) {
    text('game over', (width / 2) - 90, height / 2 + 15);
  }
  if (rectangleObject[0] != null) {
    if (checkCollision(
      idleCycle[i].x, idleCycle[i].y, idleCycle[i].w, idleCycle[i].h,
      rectangleObject[0].x1, rectangleObject[0].y1, rectangleObject[0].w2, rectangleObject[0].h2))
      {
        rectangleObject[0] = null;
      }
  }

  idleCycle[i].draw();

  if (rectangleObject[0] != null) {
    rectangleObject[0].draw();
  }

}

function checkCollision(x, y, w, h, x2, y2, w2, h2) {
  if (
    x - w / 2 < x2 + w2 / 2 &&
    x + w / 2 > x2 - w2 / 2 &&
    y - h / 2 < y2 + h2 / 2 &&
    y + h / 2 > y2 - h2 / 2
  ) {
    return true;
  } else {
    return false;
  }
}

function timeIt() {
  if (timerValue > 0) {
    timerValue--;
  }
  if (timerValue <= 0) {
    xspeed *= 1.1;
  }
}

function changeTime() {

  i++;
  if (i > idleCycle.length - 1) {
    i = 0;
  }
}
/*
if (keyIsPressed) {
  if (key == "w") {
      yImage -= 1;
  }
  if (key == "s") {
      yImage += 1;
  }
  if (key == "a") {
      xImage -= 1;
      flipX = true;
  }
  if (key == "d") {
      xImage += 1;
      flipX = false;
  }
  for (var ii = 0; ii < idleArray.length; ii++) {
    idleArray[ii].updateX(xImage);
    idleArray[ii].updateFlip(flipX);
    walkArray[ii].updateX(xImage);
    walkArray[ii].updateFlip(flipX);
    
    if (objectToEat != null) {
        if (walkArray[ii].checkCollision(objectToEat.x, objectToEat.y, objectToEat.w, objectToEat.h)) {
            objectToEat = null;
        }
    }

}
objectToDraw = walkArray;
}
*/
function mouseMoved() {
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

function mouseClicked() {
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


