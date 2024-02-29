class myFood {
    constructor(myFilename,x,y,w,h){
        //this.myFilename = myFilename;
        this.foodImage = loadImage(myFilename);
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
    }

    draw()
    {
image(this.foodImage,this.x,this.y,this.w,this.h)
    }
    }
