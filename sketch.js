var road, road2, road3, road4, road5, road6, road7, roadImg;
var car, carImg;
var npcCar1, npcCarImg;
var turnWall1, turnWall2;
var building1, building1Img, building2, building2Img, building3;
var race, npcRCar, npcRCarImg;
var fLine;

function preload() {
  carImg = loadImage("car.png");
  roadImg = loadImage("road.jpg");
  npcCarImg = loadImage("npc_car.png");
  building1Img = loadImage("b1.jpg");
  building2Img = loadImage("b2.jpg");
  npcRCarImg = loadImage("npcRCar.png");
}

function setup() {
  createCanvas(400,400);

  road = createSprite(200,355);
  road.addImage(roadImg);
  road.scale = 0.7;

  road2 = createSprite(200,265);
  road2.addImage(roadImg);
  road2.scale = 0.7;

  road3 = createSprite(200,175);
  road3.addImage(roadImg);
  road3.scale = 0.7;

  road4 = createSprite(200,85);
  road4.addImage(roadImg);
  road4.scale = 0.7;

  road5 = createSprite(200,-5);
  road5.addImage(roadImg);
  road5.scale = 0.7;

  road6 = createSprite(40,-55);
  road6.addImage(roadImg);
  road6.scale = 0.7;
  road6.rotation = 90;

  npcCar1 = createSprite(40,-80);
  npcCar1.addImage(npcCarImg);
  npcCar1.scale = 0.13;

  building1 = createSprite(30,72);
  building1.addImage(building1Img);
  building1.scale = 2;

  building2 = createSprite(60,285);
  building2.addImage(building2Img);
  building2.scale = 1.5;

  building3 = createSprite(420,185);
  building3.addImage(building2Img);
  building3.scale = 3;

  race = createSprite(200,-180,100,100);
  race.shapeColor = "red";

  fLine = createSprite(200,0,90,10);
  fLine.shapeColor = "yellow";

  car = createSprite(200,200,10,10);
  car.addImage(carImg);
  car.scale = 0.2;

  turnWall1 = createSprite(40,-55, 200, 1);
  turnWall1.visible = false;
  turnWall1.shapeColor = "blue";

}

function draw() {
  background("grey");  

  camera.position.y = car.position.y;
  camera.position.x = car.position.x;

  if(car.isTouching(turnWall1)) {

    car.rotation = -90;

    if(keyDown("up")) {
      car.x = car.x - 5
    }

    if(keyDown("down")) {
      car.x = car.x + 5
    }

    if(keyDown("right")) {
      car.y = car.y - 5
    }

    if(keyDown("left")) {
      car.y = car.y + 5
    }

  } else {

  if (keyDown("up")) {
    car.y = car.y - 5;
  }

  if (keyDown("down")) {
    car.y = car.y + 5;
  }

    if (keyDown("right")) {
      car.x = car.x + 2;
    } 
  
    if (keyDown("left")) {
      car.x = car.x - 2;
  }

  }

  if(car.overlap(race)) {
    car.x = 230;
    car.y = 200;
    npcRCar = createSprite(170,200,10,10);
    npcRCar.addImage(npcRCarImg);
    npcRCar.scale = 0.18;
    npcRCar.velocityY = -4;
 }
  drawSprites();
}

