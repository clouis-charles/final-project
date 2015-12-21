// Sprite sheets  
var bullets;
var player_sprite_sheet; 
var enemy_sprite_sheet; 
var player_walk; 
var player_stand; 
var player_shoot; 
var player_sprite; 
var enemy_walk; 
var enemy_explode; 
var enemy_sprite;
var x = 100 
var bullet_sprite;


var player_frames = []; 


var enemy_frames = [];



function setup() {
createCanvas(800, 400); 
 player_sprite = createSprite(x, 300, 10, 10);
 enemy_sprite = createSprite(700, 300, 10, 10); 

} 

function draw() {

background(0); 
    fill(255); 
    
//player movement
  if (keyIsDown(LEFT_ARROW)){ 
  player_sprite.setSpeed(3, 180);
}else if (keyIsDown(RIGHT_ARROW)){
  player_sprite.setSpeed(3, 0);
}  else{
    player_sprite.setSpeed(0, 0);
} 
    if(keyIsDown("x")) 
      { 
      var bullet = createSprite(player.position.x, player.position.y, 5, 5);
     bullet.setSpeed(10+player.getSpeed());
     bullet.life = 30; 
     bullet.add(bullet);
      } 
   
clear();
drawSprites();


}

function mousePressed(){
enemy_sprite = createSprite(random(width), random(height), 10, 10);
}
