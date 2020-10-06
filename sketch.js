var speed,weight,car,wall,deformation;

function setup() {
  createCanvas(800,400);
  car=createSprite(50, 200, 50, 50);
  car.shapeColor="white";

  wall=createSprite(700,140,40,600);
  wall.shapeColor="black";

  speed=random(35,40);
  weight=random(400,1500);

  car.velocityX=speed;
}

function draw() {
  background("lightBlue"); 

  console.log(car.velocityX);

  if(car.x-wall.x<(car.width+wall.width)/2){
    car.velocityX=0;
  
    var deformation=0.5*weight*speed*speed/22500;
    car.shapeColor="green";
    /* if(deformation>100){
      car.shapeColor="green";
    }

    if(deformation<100 && deformation>180){
        car.shapeColor="yellow";
    }

    if(deformation<180){
        car.shapeColor="red";
    } */
  }
   
  
  drawSprites();
}