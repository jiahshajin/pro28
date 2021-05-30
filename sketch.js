var ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

 var dustbin
 var dustbin1
 var dustbin2
 var paper
 var paperimg
 var slingshot 
function preload()
{
  
   
}

function setup() {
	createCanvas(1600, 360);
	 rectMode(CENTER)
  
	groundSprite=createSprite(width/2, height-15, width,14);
	groundSprite.shapeColor=color(230,230,0)

	engine = Engine.create();
	world = engine.world;

	//Create a ground
  ground= Bodies.rectangle(width/2,260,width,39,{isStatic:true});
   World.add(world,ground);

	Engine.run(engine);

   dustbin= new Dustbin(1280,242,20,162);
   dustbin1=new Dustbin(1360,330,180,12);
   dustbin2=new Dustbin(1450,242,20,162);
   paper= new Paper(300,3,20);

   slingshot=new Launcher(paper.body,{x:200,y:80})
    
}


function draw() {
  
  background(225);
    
  
  paper.display()
  drawSprites();

  dustbin.display()
  dustbin1.display()
  dustbin2.display()
  slingshot.display()
   
   
  


}

 function keyPressed(){
    if (keyCode=== UP_ARROW){

      Matter.Body.applyForce(paper.body,paper.body.position,{x:80,y:-80})
      

    }
 }
 function mouseDragged(){
  Matter.Body.setPosition(paper.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    slingshot.fly();
}
