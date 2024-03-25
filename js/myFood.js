class myFood {
    constructor(myFilename, x, y, w, h) {
        this.foodImage = loadImage(myFilename);
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        //this.glitch = new Glitch(); // Initialize Glitch object
    }

    draw() {
        image(this.foodImage, this.x, this.y, this.w, this.h);
       // this.glitch.randomBytes(10); // Example: randomize 10 bytes
        //this.glitch.buildImage(); // Build glitched image

        // Display glitched food image
        //image(this.glitch.image, this.x, this.y, this.w, this.h);
    }
    moveRandomly() {
        this.x += random(-randomMoveXSpeed, randomMoveXSpeed);
        this.y += random(-randomMoveYSpeed, randomMoveYSpeed);
    
        // Ensure the food stays within the canvas boundaries
        this.x = constrain(this.x, 0, width - this.w);
        this.y = constrain(this.y, 0, height - this.h);
}
getX()
{
  return this.x;
}
getY()
{
  return this.y;
}
getW()
{
  return this.w;
}
getH()
{
  return this.h;
}
}