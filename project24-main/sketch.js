
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbin,bin,binImg;
var paper,ground;
 var engine, world;

function preload()
{
    binImg = loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(1400, 600);
	engine = Engine.create();
	world = engine.world;

   ground = new Ground();
   paper = new Paper();

 
}
     bin = createSprite(964,500,20,20);
    bin.addImage(binImg);
    bin.scale = 0.45;

    bin1 = new Dustbin(909,510,10,120);
    bin2 = new Dustbin(965,580,130,10);
    bin3 = new Dustbin(1020,510,10,120);
    launcher = new launcher(paper.body,{x:200, y:100});


function draw(){
    background("white");
    Engine.update(engine);

   

    
    ground.display();
    bin.display();
    bin1.display();
    bin2.display();
    bin3.display(); 
      
    drawSprites();
}

function mouseDragged()
{
	Matter.Body.setPosition(paper.body, {x:mouseX, y:mouseY})
  
}

function mouseReleased()
{
	
	launcher.fly();
 
}