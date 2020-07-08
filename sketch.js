const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var engine, world;
const Constraint = Matter.Constraint;



function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  
  
  ground1 = new ground(200,80,299,50);
  
   bob1 = new bob(400,80,20);



}

function draw() {
  background("black");  
  Engine.update(engine);
  
  ground1.display();
 bob1.display();
 
 
 
}