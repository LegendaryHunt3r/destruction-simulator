const World=Matter.World
const Engine = Matter.Engine
const bodies = Matter.Bodies
function setup() {
  createCanvas(800,400);
  engine = Engine.create()
  world = engine.world
  b1 = new box(200,375,50,50)
  b2 = new box(200,325,50,50)
  b3 = new box(200,275,50,50)
  b4 = new box(200,225,50,50)
  wreckingball = new ball(200,50,25)
  connector = new SlingShot(wreckingball.ballthingie,{x:300, y:200})
  Objectground = new ground(0,400,800,10)
  Engine.run(engine) 
}

function draw() {
  background(255,255,255);  
  Objectground.display()
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  wreckingball.display();
  connector.display();
}

function mouseDragged(){
  Matter.Body.setPosition(wreckingball.ballthingie,{x:mouseX,y:mouseY})
}