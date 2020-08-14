class Stone {
    constructor(){
        var options = {
            isStatic:false,
            restitution:0,
            friction:1,
            density:1.2,
        }
        this.body = Bodies.rectangle(100,620,50,50,options);
        this.width = 20;
        this.height = 20;
        this.r = 15;
        this.image = loadImage("images/stone.png");
        World.add(world, this.body);
    }
    display(){
      push ();
        translate(this.body.position.x, this.body.position.y);
        rotate (this.body.angle);
        imageMode(CENTER);
        
        image(this.image,0,0,30,30);
        pop ();

    }
}