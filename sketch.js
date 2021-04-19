const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var block,ground,box;
var slingShot;

function setup() {
  var canvas = createCanvas(1000,600);
  engine = Engine.create();
  world = engine.world;

    
  block1 = new Block(560,365,30,40);
  block2 = new Block(590,365,30,40);
  block3 = new Block(620,365,30,40);
  block4 = new Block(650,365,30,40);
  box1 = new Box(500,325,30,40);
  box2 = new Box(530,325,30,40);
  box3 = new Box(560,325,30,40);

  block10 = new Block(470,365,30,40);
  block9 = new Block(500,365,30,40);
  block11 = new Block(530,365,30,40);
  box4 = new Box(590,325,30,40);
  box5 = new Box(620,325,30,40);

  block13 = new Block(530,285,30,40);
  block14 = new Block(560,285,30,40);
  block15 = new Block(590,285,30,40);

  box6 = new Box(560,245,30,40);


  ground1 = new Ground(560,395,350,20)
  ground01 = new Ground(790,210,250,20)
  

  box01 = new Box(730,180,30,40);
  box02 = new Box(760,180,30,40);
  box03 = new Box(790,180,30,40);
  box04 = new Box(820,180,30,40);
  box05 = new Box(850,180,30,40);
  
  block06 = new Block(760,140,30,40);
  block07 = new Block(790,140,30,40);
  block08 = new Block(820,140,30,40);

  box06 = new Box(790,100,30,40);

  polygon = new Polygon(50,200,35,35)
  
  slingShot = new SlingShot(polygon.body,{x:200,y:200});
 }

function draw() {
  background(225); 
  Engine.update(engine);
  strokeWeight(4);
 
  block2.display();
  block3.display();
  block4.display();
  block1.display();
  box1.display();
  box2.display();
  box3.display();
  
  block10.display();
  block9.display();
  block11.display();
  box4.display();
  box5.display();

  block13.display();
  block14.display();
  block15.display();

  box6.display();


  ground1.display();
  ground01.display();


  box01.display();
  box02.display();
  box03.display();
  box04.display();
  box05.display();

  block06.display();
  block07.display();
  block08.display();

  box06.display();

  polygon.display();
  slingShot.display();

}

function mouseDragged(){
  Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  slingShot.detach()
}


function keyPressed(){
  if(keyCode === 32){
      slingshot.attach(bird.body);
  }
}

