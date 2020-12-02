var speed,weight,bullet,wall,thickness,damage;

function setup() {
  createCanvas(1600,400);
  bullet=createSprite(50, 200, 50, 50);
  bullet.shapeColor="white";

  wall=createSprite(1700,200,thickness,height/2);
  wall.shapeColor=80,80,80;
  wall.height=100;

  bullet.shapeColor="green";

  speed=random(223,321);
  weight=random(30,52);

  bullet.velocityX=speed;

  thickness=random(22,83);
  wall.width=thickness;
}

function draw() {
  background("lightBlue"); 

  console.log(bullet.velocityX);

  if(hasCollided(bullet,wall)){
    bullet.velocityX=0;
  
    var damage=0.5*weight*speed*speed/thickness*thickness*thickness;
    bullet.shapeColor="green";
    if(damage>10){
      wall.shapeColor=color (255,0,0);
    }

    else if(damage<10){
        wall.shapeColor=color(0,255,0);
    }

  }
   
  function hasCollided(bullet,wall){

    var bulletRightEdge=bullet.x + bullet.width;
    var wallLeftEdge=wall.x;
    if(bulletRightEdge=wallLeftEdge){
      return true
    }
    
    return false;
  };

  drawSprites();
}

  