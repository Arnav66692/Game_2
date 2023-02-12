var bg,bgImg;
var player, shooterImg, shooter_shooting;
var asteroid1, asteroid2;
var ship1, ship2, ship3;
var backg;
var star1;
var enemy1, enemy2;

function preload(){
  
  shooterImg = loadImage("assets/shooter_2.png")
  shooter_shooting = loadImage("assets/shooter_3.png")
  backg = loadImage("assets/StarrySky.png")
  bgImg = loadImage("assets/bg.jpeg")
  asteroid1 = loadImage("assets/Asteroid1.png")
  asteroid2 = loadImage("assets/Asteroid2.png")
  ship1 = loadImage("assets/Castle1.png")
  ship2 = loadImage("assets/Castle2.png")
  ship3 = loadImage("assets/Castle3.png")
  enemy1 = loadImage("assets/Enemy1.png")
  enemy2 = loadImage("assets/Enemy2.png")
  star1 = loadImage("assets/Star.png")
  
}

function setup() {

  createCanvas(windowWidth,windowHeight);

  

  //adding the background image
  bg = createSprite(displayWidth/2-20,displayHeight/2+40,20,20)
bg.addImage(backg)
bg.scale = 2
bg.velocityX = -3

//creating the player sprite
player = createSprite(displayWidth-1150, displayHeight-300, 50, 50);
 player.addImage(ship3)
   player.scale = 0.7
   player.debug = true
   player.setCollider("rectangle",0,0,300,300)


}

function draw() {
  background(0); 

if(bg.x<100){
bg.x = width/2
}


  //moving the player up and down and making the game mobile compatible using touches
if(keyDown("UP_ARROW")||touches.length>0){
  player.y = player.y-30
}
if(keyDown("DOWN_ARROW")||touches.length>0){
 player.y = player.y+30
}


//release bullets and change the image of shooter to shooting position when space is pressed
if(keyWentDown("space")){
 
  player.addImage(ship1)
 
}

//player goes back to original standing image once we stop pressing the space bar
else if(keyWentUp("space")){
  player.addImage(ship3)
}

drawSprites();

}
