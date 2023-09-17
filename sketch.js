var path;
var oggy;
var joey,marky,deedee;
var jack;
var olivia;
var bob;

var pathImg;
var oggyImg;
var oggyWalkingAnimation;
var joeyImg,markyImg,deedeeImg;
var jackImg;
var oliviaImg;
var bobImg;

var joeyCG,markyCG,deedeeCG;
var jackCG;
var oliviaCG;
var bobCG;

var END = 0;
var PLAY = 1;
var gameState = PLAY;

var kills = 0;
var gameOver,restart;

function preload() {
  oggyWalkingAnimation=loadAnimation( "OGGY WALKING/0.png","OGGY WALKING/1.png","OGGY WALKING/2.png","OGGY WALKING/3.png","OGGY WALKING/4.png","OGGY WALKING/5.png","OGGY WALKING/6.png","OGGY WALKING/7.png");

}
function setup() {
  createCanvas(700,700);
   path = createSprite(500,350);
   //path.addImage(pathImg);
   path.velocityY = -5;

   oggy = createSprite(0,700);
   oggy.addAnimation("walking",oggyWalkingAnimation);
   oggy.scale = 1;

   //oggy.setCollider();

   gameOver = createSprite();
  // gameOver.addImage();
   gameOver.scale = 0.8;
   gameOver.visible = false;

   joeyCG = new Group();
   markyCG = new Group();
   deedeeCG = new Group();
   jackCG = new Group();
   oliviaCG = new Group();
   bobCG = new Group();
}


function draw() {
  background(0);  
  
  drawSprites();

  textSize(20);
  fill(255);
  text("Kills="+kills,200,50);

  if(gameState===PLAY){
    
   // kills = kills + Math.round(getFrameRate()/50);
    path.velocityY = -(6 + 2*kills/150);
   
    oggy.x = World.mouseX;
   
    if(oggy.x<350){
      oggy.mirrorX(-1);
    }
    else if(oggy.x>350){
        oggy.mirrorX(1);
    }

    edges = createEdgeSprites();
    oggy.collide(edges);
   
    if(path.y < 0 ){
     path.y = height/2;
   }
  }
  

}