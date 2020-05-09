const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;


function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    randx=random(0,400)
    raindrop = new Raindrop(randx,0);




}

function draw(){
    Engine.update(engine);
    for (let i = 0; i < 100; i++) {
      raindrop.display();
      
    }

}