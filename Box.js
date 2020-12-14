class Box {

    constructor(x,y,width,height) {
    this.body = Bodies.rectangle(x,y,width,height);
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    World.add(world,this.body);

    }

    display() {
    var pos = this.body.position;
    rectMode(CENTER);
    fill("red");
    rect(pos.x,pos.y,this.width,this.height);
    }
}