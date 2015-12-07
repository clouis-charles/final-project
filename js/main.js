// Sprite sheets  
var mouse_moved = false; 
var player_sprite_sheet; 
var enemy_sprite_sheet; 
var player_walk; 
var player_stand; 
var player_shoot; 
var player_sprite; 
var enemy_stand; 
var enemy_explode; 
var enemy_sprite;

var player_frames = []; 


var enemy_frames = [];



function setup() {
createCanvas(800, 400);
 player_sprite = createSprite(300, 200, 10, 10);
 enemy_sprite = createSprite(random(width), random(height), 10, 10);
  
} 

function draw() {

background(255);

drawSprites();


}

function mousePressed(){

enemy_sprite = createSprite(random(width), random(height), 10, 10);


}
