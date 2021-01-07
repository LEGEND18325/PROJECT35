//Create variables here
var dogimg,dog,dogHappy;
var database;
var foodS;
var foodstock;
function preload()
{
  //load images here
  dogimg=loadImage("images/dogimg.png")
dogHappy=loadImage("images/dogimg1.png")
}

function setup() {
  createCanvas(500, 500);
  dog=createSprite(250,250,30,30)
  dog.addImage(dogimg)
  dog.scale=0.3
  database=firebase.database();
   foodstock=database.ref('Food');
  foodstock.on("value",readstock);

  
}


function draw() {  
background(46,139,87)
if(keyWentDown(UP_ARROW)){
  writestock(foodS);
  dog.addImage(dogHappy);
}
  drawSprites();
  //add styles here
  fill("yellow")
  textSize(16)
  text("NOTE : PRESS UP_ARROW KEY TO FEED ROCKY MILK",50,50)

}

function readstock(data){
  foodS=data.val();
}

function writestock(x){
  if(x<=0){
    x=0;
  }else{
    x=x-1
  }
  database.ref('/').update({
    Food:x
  })
}




