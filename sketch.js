
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var tree;
var ground;
var stone;
var boyImage;
var mango1,mango2,mango3,mango4,mango5;
var sling;



function preload()
{
	boyImage  = loadImage("images/boy.png")
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	tree = new Tree(400,500,50,50);
	ground = new Ground(width/2,700,width,10);
	
	stone = new Stone(400,420,20,20);
	
	mango1  =new Mango(600,400,50,50);
	mango2  = new Mango(500,450,50,50);
	mango3  = new Mango(550,480,50,50);
	mango4  = new Mango(650,450,50,50);
	mango5  = new Mango(700,430,50,50);
	sling = new SlingShot(stone.body,{x:80 , y:620});
	

	

	
	
	World.add(world,ground)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  image(boyImage,60,580,150,150);
  ground.display();
  tree.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
 
  stone.display();
 sling.display();
 detectollision(stone,mango1);
 detectollision(stone,mango2);
 detectollision(stone,mango3);
 detectollision(stone,mango4);
 detectollision(stone,mango5);

 
  
  

  
 
  
  drawSprites();
 
}
function mouseDragged(){
	Matter.Body.setPosition(stone.body,{x:mouseX , y:mouseY})
  
  }
  function mouseReleased(){
   sling.fly();
  } 
  function detectollision(lstone,lmango){
	  mangoBodyPosition=lmango.body.position
	  stoneBodyPosition=lstone.body.position
	  var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
	  if(distance<=lmango.r+lstone.r){
		  Matter.Body.setStatic(lmango.body,false);
	  }

  }
  function keyPressed(){
	  if (keyCode === 32){
		  Matter.Body.setPosition(stone.body,{x:100,y:620});
		  sling.attach(stone.body);
	  }
  }



