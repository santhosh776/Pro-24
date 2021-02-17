var stone;
var rubber;
var hammer;
var ground;
var iron;
var sand1;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);
  

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    stone=new Stone(700,400,40,40)
    
    rubber=new Rubber(800,600,25)
    
    ground = new Ground(800,height,1600,20)
    
    iron=new Iron(300,500,100,40)
    
    hammer= new Hammer(900,100,90,10)

    sand1=new Sand(300,200)
    sand2=new Sand(578,200)
    sand3=new Sand(700,200)
    sand4=new Sand(900,200)
    sand5=new Sand(1000,200)
    sand6=new Sand(453,200)

	  Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);

  background("cyan");

  stone.display();
  rubber.display();
  ground.display();
  iron.display();
  hammer.display();
  sand1.display();
  sand2.display();
  sand3.display();
  sand4.display();
  sand5.display();
  sand6.display();
  drawSprites();
 
}



