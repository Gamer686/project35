var balloon;
var background;
function preload(){
 balloonImg = loadAnimation("Hot Air Ballon-01.png,Hot Air Ballon-02.png,Hot Air Ballon-03.png,Hot Air Ballon-04.png")
 backgroundIMG = loadImage("1.png.jpg")
}
function setup() {
 
  database = firebase.database();
  console.log(database);
  createCanvas(500,500);
  createSprite(400, 200, 50, 50);
  balloon = createSprite(100,400,20,20)
  balloon = addAnimation("balloon",balloonImg)
  balloon.scale =0.4;
}

function draw() {
  background(backgroundIMG);
  if(keyDown(LEFT_ARRROW))  {
    balloon.x = balloon.x -10;
}
else if(keyDown(RIGHT_ARROW)){
  balloon.x = balloon.x +10
}
else if (keyDown(UP_ARROW)){
  balloon.y = balloon.y -10;
  }
  else if(keyDown(DOWN_ARROW)){
    balloon.y = balloon.y +10;
 }
 
  drawSprites();
}