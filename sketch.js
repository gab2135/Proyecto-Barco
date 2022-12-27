
function preload(){
 ship = loadAnimation("shipImg1.png","shipImg2","shipImg3","shipImg4");

 seaImg = loadImage("sea.png");

}

function setup(){
  createCanvas(400,400);
 ship = createSprite(50,160,20,50);
 ship.addAnimation("")
 edges = createEdgeSprites();

ship.scale= 0.5;
ship.x = 50;

}

function draw() {
  background("blue");
  shipImg1 = loadAnimation ()
  shipImg2 = loadAnimation ()
  shipImg3 = loadAnimation ()
  shipImg4 = loadAnimation ()

  if(keydown("space")) {
    ship.velocityY = -10
  }
 
  ship.velocityY= ship.velocityY + 0.8
 
  ship.collide(invisibleGround);
 
 drawSprites();
}