class Raindrop{
    constructor(x, y) {
        var options = {
            'restitution':0,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, 10,30 , options);
        this.width = 10;
        this.height = 30;
   
        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
        rectMode(CENTER);
        strokeWeight(4);
        stroke("black");
        fill(255);
      }

}