var star;

function setup() {
  createCanvas(400,400);
  star = createSprite (100, 100, 10, 20); 
}

function draw() 
{
  background("black");
  if (keyIsDown(RIGHT_ARROW)){
    star.position.x = star.position.x + 5;
  }

  if (keyIsDown(LEFT_ARROW)){
    star.position.x = star.position.x - 5;
  }
  drawSprites();
}




