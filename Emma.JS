let spriteX, spriteY;
let flowerX, flowerY
function setup() {
  createCanvas(400, 400);
  spriteX = 50;
  spriteY = 50;
  flowerX= 70;
  flowerY= 200;
}

function draw() {
  background("pink");
  addSprite(spriteX, spriteY, 2);
  addFlower(flowerX, flowerY, 0.5);
   
}
function addSprite(x, y, size) {
  push();
  translate(x, y);
  scale(size);
  fill("orange");
  ellipse(50, 50, 20);
  pop();

}function keyPressed() {
  if (keyCode == UP_ARROW) {
    spriteY -= 5;
  }
  if (keyCode == DOWN_ARROW) {
    spriteY += 5;
  }
  if (keyCode == RIGHT_ARROW) {
    spriteX += 5;
  }
  if (keyCode == LEFT_ARROW) {
    spriteX -= 5;
  }
}
function addFlower(x, y, size) {
  push();
  translate(x, y);
  scale(size);
  fill("skyblue");
  ellipse(180, 125, 70);
  ellipse(225, 130, 70);
  ellipse(240, 180, 70);
  ellipse(215, 230, 70);
  ellipse(160, 225, 70);
  ellipse(140, 150, 70);

  ellipse(135, 180, 70);
  fill("yellow");
  ellipse(190, 180, 70);
  
  pop();
}
