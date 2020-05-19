const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
function setup() {
  createCanvas(1200,800);
  engine = Engine.create();
  world = engine.world;
  roof1= new Roof(600,100,100,20);
  roof2= new Roof(700,100,100,20);
  roof3= new Roof(800,100,100,20);
  roof4= new Roof(500,100,100,20);
  roof5= new Roof(400,100,100,20)
  bob1= new Bob1(600,1000,70);
  bob2= new Bob2(700,400,70);
  bob3= new Bob3(1300,400,70)
  bob4= new Bob4(500,400,70);
  bob5= new Bob5(-100,400,70);
  rope1= new Rope1(bob1.body,roof1.body);
  rope2= new Rope2(bob2.body,roof2.body);
  rope3= new Rope3(bob3.body,roof3.body);
  rope4= new Rope4(bob4.body,roof4.body);
  rope5= new Rope5(bob5.body,roof5.body)
}

function draw() {
  background(0,255,0);  
  Engine.update(engine);
  roof1.display();
  roof2.display();
  roof3.display();
  roof4.display();
  roof5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  drawSprites();
}