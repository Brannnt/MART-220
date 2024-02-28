class myCharacter {
    constructor(myFilename,x,y,w,h){
        //this.myFilename = myFilename;
        this.characterImage = loadImage(myFilename);
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
    }

    draw()
    {
        image(this.characterImage, 140,150,100,100);
    }
}
