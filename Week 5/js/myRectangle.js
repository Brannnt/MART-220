class myRectangle {
    constructor(x1,y1,w2,h2,r,g,b)
    {
    this.x1=x1;
    this.y1=y1;
    this.w2=w2;
    this.h2=h2;
    this.r=r;
    this.g=g;
    this.b=b;
    }
    
    draw()
    {
        fill(this.r,this.g,this.b);
        rect(this.x1,this.y1,this.w2,this.h2);
    }
    }