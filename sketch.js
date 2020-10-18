var wall, thickness ; 
var bullet,speed,weight ;


function setup() {
  createCanvas(1600,400);
  thickness=random(22,83);
  wall=createSprite(1200,200, thickness,height/2);
  wall.shapeColor="white";

  speed=random(223,321);
  weight=random(30,52);
  bullet=createSprite(50, 200, 50, 50);
  bullet.velocityX=speed;
}

function draw() {
  background(0,0,0);  
  if(hascollided(bullet,wall))
  {
    bullet.velocityX=0;
    var damage=0.5*weight*speed*speed/(thickness * thickness * thickness);
    if(damage>10)
    {
      wall.shapeColor="red";
    }
    if(damage<10)
    {
      wall.shapeColor="green";   
    }

  }
  drawSprites();
}



