var fixedRect,movingRect;
var objA,objB;

function setup() 
{
  createCanvas(800,800);

  fixedRect= createSprite(400, 100, 50, 80);
  movingRect= createSprite(400, 700, 80, 30);
  objA=createSprite(100, 100, 50, 50);
  objB=createSprite(200, 100, 50, 50);

  fixedRect.shapeColor="green";
  movingRect.shapeColor="green";
  objA.shapeColor="green";
  objB.shapeColor="green";

  fixedRect.velocityY=6;
  movingRect.velocityY=-6;
}

function draw() 
{
  background(0,0,255);  
  drawSprites();  
  Bounce(movingRect,fixedRect);
}

