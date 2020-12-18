var PLAY = 1;
var END = 0;
var restart;
var gameState = PLAY;
var restart2;
var sword , alien1Group,alien2Group ,fruit1Group ,fruit2Group,fruit22Group, fruit3Group,fruit33Group,fruit4Group,fruit44Group;
var swordImage,fruit1Image,alien1Image,alien11Image, alien2Image, fruit2Image ,fruit3Image;
var score=0;
var swordsound;
var gameover2;
function preload(){
  
  alien1Image2 = loadImage("alien1.png");
  swordImage = loadImage("sword.png");
  alien2Image2 = loadImage("alien2.png");
  fruit1Image2 = loadImage("fruit1.png");
  fruit2Image2 = loadImage("fruit2.png");
 fruit3Image2 = loadImage("fruit3.png");
 fruit4Image2 = loadImage("fruit4.png");
 restart2=loadImage("gameover.png") ;
   fruit11Image2 = loadImage("fruit1.png");
   fruit22Image2 = loadImage("fruit2.png");
 fruit33Image2 = loadImage("fruit3.png");
 fruit44Image2 = loadImage("fruit4.png");
 swordsound=loadSound("sword.mp3")
 gameover2=loadSound("game-over-sound-effect.mp3")
}

function setup() {
  createCanvas(600,500);
  
  //creating background
  
  
  // creating bow to shoot arrow
  sword = createSprite(550,220,20,100);
  sword.addImage(swordImage); 
  sword.scale = 0.5;
  
  restart= createSprite(300,200,20,20)
  restart.addImage(restart2);
  restart.scale=1.5
  fruit1Group = createGroup();
  fruit2Group = createGroup();
  fruit3Group = createGroup();
  fruit4Group = createGroup();
  alien1Group = createGroup();
  alien2Group = createGroup();
  fruit11Group = createGroup();
  fruit22Group = createGroup();
  fruit33Group = createGroup();
  fruit44Group = createGroup();

  
}

function draw() {

  // moving ground
    background("pink");
  //moving bow
  
   // release arrow when space key is pressed
  
   if(gameState === PLAY){
     
     alien1();
     alien2();
     fruit1();
     fruit2();
     fruit3();
     fruit4();
     fruit11();
      fruit22();
     fruit33();
     fruit44();
    
     sword.y = World.mouseY
  sword.x= World.mouseX
  restart.visible=false
     if (sword.isTouching(fruit1Group)) {
  fruit1Group.destroyEach();
    swordsound.play();
    score=score+1;
}
     
      if (sword.isTouching(fruit11Group)) {
  fruit11Group.destroyEach();
    score=score+1;
    swordsound.play();

}

 if (sword.isTouching(fruit2Group)) {
  fruit2Group.destroyEach();
  score=score+3;
       swordsound.play();

}
      if (sword.isTouching(fruit22Group)) {
  fruit22Group.destroyEach();
  score=score+3;
            swordsound.play();

}
 if (sword.isTouching(fruit3Group)) {
  fruit3Group.destroyEach();
  score=score+2;
       swordsound.play();

}
     if (sword.isTouching(fruit33Group)) {
  fruit33Group.destroyEach();
  score=score+2;
           swordsound.play();

}
if (sword.isTouching(fruit4Group)) {
  fruit4Group.destroyEach();   
      swordsound.play();

  score=score+1;
}
     if (sword.isTouching(fruit44Group)) {
  fruit44Group.destroyEach();
           swordsound.play();

  score=score+1;
}
 if(sword.isTouching(alien1Group)||sword.isTouching(alien2Group)){
        gameState = END;
   
         gameover2.play(); 
     }
   }
    else if (gameState === END) {
       fruit1Group.setVelocityYEach(0);
       alien1Group.setVelocityYEach(0);
       alien2Group.setVelocityYEach(0);
       fruit2Group.setVelocityYEach(0);
       fruit3Group.setVelocityYEach(0);
       fruit4Group.setVelocityYEach(0);
       fruit11Group.setVelocityXEach(0);  
       fruit22Group.setVelocityXEach(0);
       fruit33Group.setVelocityXEach(0);
       fruit44Group.setVelocityXEach(0);  

     restart.visible=true;
   }
  
  

  drawSprites();
  spawnscore()
}


// Creating  arrows for bow

 function spawnscore(){
  textSize(25)
  text("score "+score,450,20)
 }

 
function alien2(){
   
  if(frameCount%60==0){
  var alien2 = createSprite(50, 490, 20, 20);
  alien2.velocityY=-(2 + 2* score/10);
  alien2.addAnimation("alien2",alien2Image2);
  alien2.scale=1
  alien2.x=round(random(20,90)) 
  alien2.lifetime=-1;
  console.log(alien2.depth)
  alien2Group.add(alien2)
  }
}
 
function alien1(){
   
  if(frameCount%160==0){
  var alien1 = createSprite(50, 500, 20, 20);
  alien1.velocityY=-(2 + 2* score/10);
  alien1.addAnimation("alien1",alien1Image2);
  alien1.scale=1
  alien1.x=round(random(500,580)) 
  alien1.lifetime=-1;
  console.log(alien1.depth)
  alien1Group.add(alien1)

  }
}


function fruit1(){
   
  if(frameCount%80==0){
  var fruit1 = createSprite(50, 490, 20, 20);
  fruit1.velocityY=-(2+ 2* score/4);
  fruit1.addAnimation("green_balloon",fruit1Image2);
  fruit1.scale=0.2
  fruit1.x=round(random(110,180)) 
  console.log(fruit1.depth) 
  fruit1.lifetime=-1;
  fruit1Group.add(fruit1);

}
}
 function fruit11(){
   
  if(frameCount%80==0){
  var fruit11 = createSprite(490, 50, 20, 20);
  fruit11.velocityX=-(2 + 2* score/4);
  fruit11.addAnimation("green_balloon",fruit11Image2);
  fruit11.scale=0.2
  fruit11.y=round(random(50,150)) 
  console.log(fruit1.depth) 
  fruit11.lifetime=-1;
  fruit11Group.add(fruit11);

}
}
function fruit2(){
   
  if(frameCount%100==0){
  var fruit2 = createSprite(50, 490, 20, 20);
  fruit2.velocityY=-(2 + 2* score/4);
  fruit2.addAnimation("fruit2",fruit2Image2);
  fruit2.scale=0.2
  fruit2.x=round(random(200,280)) 
  console.log(fruit2.depth)
  fruit2.lifetime=-1;
  fruit2Group.add(fruit2);

 }
}  
function fruit22(){
   
  if(frameCount%100==0){
  var fruit22 = createSprite(490, 50, 20, 20);
  fruit22.velocityX=-(2+ 2* score/4);
  fruit22.addAnimation("fruit22",fruit22Image2);
  fruit22.scale=0.2
  fruit22.y=round(random(200,280)) 
  console.log(fruit22.depth)
  fruit22.lifetime=-1;
  fruit22Group.add(fruit22);

 }
}  
function fruit3(){
   
  if(frameCount%120==0){
  var fruit3 = createSprite(50, 490, 20, 20);
  fruit3.velocityY=-(2+ 2* score/4);
  fruit3.addAnimation("fruit3",fruit3Image2);
  fruit3.scale=0.2
  fruit3.x=round(random(300,380)) 
  console.log(fruit3.depth)
  fruit3.lifetime=-1;
  fruit3Group.add(fruit3);

}
}  
function fruit33(){
   
  if(frameCount%120==0){
  var fruit33 = createSprite(490, 50, 20, 20);
  fruit33.velocityX=-(2 + 2* score/4);
  fruit33.addAnimation("fruit33",fruit33Image2);
  fruit33.scale=0.2
  fruit33.y=round(random(300,380)) 
  console.log(fruit33.depth)
  fruit33.lifetime=-1;
  fruit33Group.add(fruit33);

}
}  

function fruit4(){
   
  if(frameCount%140==0){
  var fruit4 = createSprite(50, 500, 20, 20);
  fruit4.velocityY=-(2+ 2* score/4);
  fruit4.addAnimation("fruit4",fruit4Image2);
  fruit4.scale=0.15
  fruit4.x=round(random(400,480)) 
  console.log(fruit3.depth)
  fruit4.lifetime=-1;
  fruit4Group.add(fruit4)
}
}  
function fruit44(){
   
  if(frameCount%140==0){
  var fruit44 = createSprite(500, 50, 20, 20);
  fruit44.velocityX=-(2+ 2* score/4);
  fruit44.addAnimation("fruit44",fruit44Image2);
  fruit44.scale=0.15
  fruit44.y=round(random(400,480)) 
  console.log(fruit44.depth)
  fruit44.lifetime=-1;
  fruit44Group.add(fruit44)
}
}  