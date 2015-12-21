// Sprite sheets and global variables  
var bullets; 
var enemy;
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
var direction = 0;

var player_frames = []; 


var enemy_frames = [];



function setup() {
createCanvas(800, 400); 
    enemy = new Group();
 bullets = new Group(); 
 player_sprite = createSprite(x, 300, 30, 30);
 enemy_sprite = createSprite(700, 300, 30, 30); 
 enemy.add(enemy_sprite);

} 

function draw() {

background(0); 
    fill(255); 
    
//player movement
  if (keyIsDown(LEFT_ARROW)){ 
  player_sprite.setSpeed(3, 180); 
  //player_sprite.mirrorX(-1);
}else if (keyIsDown(RIGHT_ARROW)){
  player_sprite.setSpeed(3, 0); 
  //player_sprite.mirrorX(1);
}  else{
    player_sprite.setSpeed(0, 0);
}  
//bullet control
 if(keyWentDown("X")) 
      { 
     var bullet = createSprite(player_sprite.position.x, player_sprite.position.y, 10, 10);
     bullet.setSpeed(10+player_sprite.getSpeed(), player_sprite.rotation);
     bullet.life = 30;  
     bullets.add(bullet);
      }  
//enemy movement 
direction = 180; 
enemy_sprite.setSpeed(2, direction); 
//collider 
enemy_sprite.collide(player_sprite);  
//bullets.overlap(enemy_sprite, enemyHit);
bullets.overlap(enemy,enemyHit);
player_sprite.overlap(enemy, playerHit)   
clear();
drawSprites();


}
function enemyHit(bullet, enemy_sprite) {
enemy_sprite.remove();
    //spawn new enemy
    setTimeout(makeEnemy,500);
    
}

function makeEnemy(){
 //make the new enemy   
    var enemy_sprite = createSprite(700, 300, 30, 30); 
    enemy_sprite.setSpeed(random(2,20), direction);
    enemy.add(enemy_sprite);
}

function playerHit(player_sprite, enemy){ 




}

