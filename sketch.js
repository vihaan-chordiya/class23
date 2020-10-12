
const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
var ourEngine,ourWorld
 var box1, box2;
 var ground1;
function setup() {
  createCanvas(400,400);
  ourEngine=Engine.create();
  ourWorld=ourEngine.world;
  box1=new Box(225,100,50,70);
  box2=new Box(200,300,50,50);
  ground1=new Ground(200,380,400,20);
}

function draw() {
  background("lightBlue");  
  
  Engine.update(ourEngine)
  box1.display();
  box2.display();
  ground1.display();
}