class myCharacter {
    constructor(myFilename,x,y,w,h){
        //this.myFilename = myFilename;
        //this.path = path;
        this.characterImage = loadImage(myFilename);
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
    }

    updateX(x) {
        this.x = x;
    }
    updateFlip(flipX) {
        this.flipX = flipX;
    }
    
    draw()
    {
        if (this.flipX) {
            // The push and pop functions save and reset the previous transformation.
            push();
            // Scale -1, 1 means reverse the x axis, keep y the same.
            scale(-1, 1);
            // Because the x-axis is reversed, we need to draw at different x position.
            image(this.characterImage, -this.x - this.w, this.y, this.w, this.h);
            pop();
        }
        else {
            image(this.characterImage, this.x, this.y, this.w, this.h);

        }

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

  checkCollision(x2, y2, w2, h2) {
    return collideRectRect(this.x, this.y, this.w, this.h, x2, y2, w2, h2);
}


}