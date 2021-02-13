const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var myEngine, myWorld, ground, ball;
function setup() {
  createCanvas(400,400);
 myEngine=Engine.create();
 myWorld=myEngine.world;

 //creating ground
 var groundoption={
   isStatic:true
 }
 ground=Bodies.rectangle(200,390,400,10,groundoption);
 World.add(myWorld,ground);

 //creating ball
 var balloption={
restitution:2.0
 }
 ball=Bodies.circle(200,100,20,balloption);
 World.add(myWorld,ball);
}

function draw() {
  background(0);
  Engine.update(myEngine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,10);  
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);
}