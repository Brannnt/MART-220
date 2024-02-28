let burgerX, burgerY;
let tomatoX, tomatoY;
let lettuceX, lettuceY;
let cheeseX, cheeseY;
let pattyX, pattyY;
let nameX, nameY;

function setup() {
  createCanvas(600, 400);
  noStroke();

  // Initialize positions
  burgerX = width / 2;
  burgerY = height / 2;
  tomatoX = random(width);
  tomatoY = random(height);
  lettuceX = random(width);
  lettuceY = random(height);
  cheeseX = random(width);
  cheeseY = random(height);
  pattyX = random(width);
  pattyY = random(height);
  nameX = width - 10;
  nameY = height - 10;
}

function draw() {
  background(220);

  // Burger bun
  fill(255, 255, 0); // Yellow
  ellipse(burgerX, burgerY, 200, 150);

  // Tomato
  fill(255, 0, 0); // Red
  ellipse(tomatoX, tomatoY, 40, 40);

  // Lettuce
  fill(0, 255, 0); // Green
  ellipse(lettuceX, lettuceY, 50, 50);

  // Cheese
  fill(255, 200, 0); // Orange
  rect(cheeseX - 25, cheeseY - 25, 50, 50);

  // Patty
  fill(139, 69, 19); // Brown
  ellipse(pattyX, pattyY, 60, 60);

  // Display name
  fill(0); // Black
  textAlign(RIGHT, BOTTOM);
  text("Your Name", nameX, nameY);

  // Move ingredients randomly
  tomatoX += random(-2, 2);
  tomatoY += random(-2, 2);
  lettuceX += random(-2, 2);
  lettuceY += random(-2, 2);
  cheeseX += random(-2, 2);
  cheeseY += random(-2, 2);
  pattyX += random(-2, 2);
  pattyY += random(-2, 2);
}

// Handle mouse click event
function mouseClicked() {
  // Reset positions on mouse click
  tomatoX = random(width);
  tomatoY = random(height);
  lettuceX = random(width);
  lettuceY = random(height);
  cheeseX = random(width);
  cheeseY = random(height);
  pattyX = random(width);
  pattyY = random(height);
}
