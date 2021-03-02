var balloon;
var background;
var database;
var pos, position;

function preload(){
 balloonImg = loadAnimation("Hot Air Ballon-02.png","Hot Air Ballon-03.png","Hot Air Ballon-04.png")
 backgroundIMG = loadImage("1.jpg")
}
function setup() {
 
  database = firebase.database();
  console.log(database);
  createCanvas(500,500);
  balloon = createSprite(100,400,20,20)
  balloon.addAnimation("balloon",balloonImg)
  balloon.scale =0.4;
  var balloonPosRef = database.ref("balloon/position");
  balloonPosRef.on("value",readPos);

}

function draw() {
  background(backgroundIMG);
  if(keyDown(LEFT_ARROW))  {
    changePosition(-1,0)
}
else if(keyDown(RIGHT_ARROW)){
  changePosition(1,0)
}
else if (keyDown(UP_ARROW)){
  changePosition(0,-1)
  }
  else if(keyDown(DOWN_ARROW)){
    changePosition(0,+1)
 }
 
  drawSprites();
}
function changePosition(x,y){
  console.log("IN changePos")
  console.log(x +"," + y)
  console.log(position)
  database.ref("balloon/position").update({
    x:position.x+x,
    y:position.y+y
  })
}
function readPos(data){
console.log("Reading Position")
position = data.val();
balloon.x = position.x
balloon.y = position.y
console.log(position.x)
}
