var box;

function setup() {
  createCanvas(600,600);
  box = createSprite(400,400,60,60);

}

function draw() 
{
   background(204, 135, 86);

  if (keyIsDown(RIGHT_ARROW)) 
  {
    box.position.x = box.position.x +9;
    box.shapeColor=color(235, 52, 52);
    

  }

    if (keyIsDown(LEFT_ARROW)) 
  {
    box.position.x= box.position.x -9;
    box.shapeColor=color(235, 198, 52);
    
  }
 
    if (keyIsDown(UP_ARROW)) 
  {
    box.position.y = box.position.y - 9;
    box.shapeColor=color(113, 235, 52);
    

   
  }

  if (keyIsDown(DOWN_ARROW)) 
  {
    box.position.y = box.position.y +9;
    box.shapeColor=color(52, 171, 235);
    

  }

  drawSprites();
}




