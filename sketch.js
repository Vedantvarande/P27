const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5,roof;
var rope1,rope2,rope3,rope4,rope5;


function setup() 
{
	createCanvas(800, 700);
    engine = Engine.create();
	world = engine.world;

	roof = new Top(460,220,150,20);
	bobObject1 = new Bob(400,350,30);
	bobObject2 = new Bob(430,350,30);
	bobObject3 = new Bob(460,350,30);
	bobObject4 = new Bob(490,350,30);
	bobObject5 = new Bob(520,350,30);
	rope1 = new rope(bobObject1.body,roof.body,-60,0);
	rope2 = new rope(bobObject2.body,roof.body,-30,0);
	rope3 = new rope(bobObject3.body,roof.body,0,0);
  rope4 = new rope(bobObject4.body,roof.body,30,0);
	rope5 = new rope(bobObject5.body,roof.body,60,0);

	Engine.run(engine);
}


function draw() 
{
  background("white");

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  bobObject1.display(); 
  bobObject2.display(); 
  bobObject3.display(); 
  bobObject4.display(); 
  bobObject5.display();
  roof.display(); 
}


function keyPressed()
{
  if(keyCode === UP_ARROW)
  {
		Matter.Body.applyForce(bobObject1.body,bobObject1.position,{x:-30,y:-30})
	}
}


