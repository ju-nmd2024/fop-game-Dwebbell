let x = 750;
let y = 200;
let flowerX = 0;
let flowerY = 0;
let state = "start";
let beeWings = true;
let velocityY = 0.5;
let acceleration = 0.3;

function setup() {
  createCanvas(700, 700);
}

function startScreen() {
  push();
  background(130, 200, 250);
  fill(250, 250, 250);
  rect(200, 125, 300, 150);
  fill(0);
  textSize(20);
  textAlign(CENTER);
  text("Help the bee land on the flower", 350, 200);
  fill(255, 255, 255);
  text("Click to Start", 350, 320);
  pop();

  flower(flowerX, flowerY);
  push();
  translate(500, 10);
  scale(0.2);
  rotate(0.3);
  bee(10, 500);
  pop();

  line(570, 160, 580, 170);
  line(580, 180, 575, 190);
  line(575, 200, 580, 210);
  line(580, 220, 590, 230);
}

function gameScreen() {
  background(130, 200, 250);

  flower(flowerX, flowerY);
  clouds();
}

function keyPressed() {
  if (keyIsDown(32)) {
    velocityY = velocityY - 0.8;
  }
}

function resultScreenGameOver() {
  push();
  background(130, 200, 250);
  textSize(72);
  fill(255, 0, 0);
  textAlign(CENTER);
  text("GAME OVER", 350, 300);
  fill(250, 250, 250);
  textSize(32);
  text("You went to fast!", 350, 400);
  text("Click to retry", 350, 450);
  pop();
}

function resultScreenWon() {
  push();
  background(130, 200, 250);
  textSize(72);
  fill(0, 255, 0);
  textAlign(CENTER);
  text("YOU WON", 350, 300);
  fill(250, 250, 250);
  textSize(32);
  text("You helped the bee pollinate!", 350, 400);
  pop();
}

function clouds() {
  push();
  noStroke();
  fill(255, 255, 255);
  ellipse(135, 130, 80, 50);
  ellipse(120, 150, 80, 50);
  ellipse(170, 150, 80, 50);
  ellipse(535, 130, 80, 50);
  ellipse(520, 160, 80, 50);
  ellipse(560, 150, 80, 50);
  ellipse(335, 210, 60, 30);
  ellipse(320, 220, 60, 30);
  ellipse(360, 220, 60, 30);
  pop();
}

function bee(x, y) {
  //back wing
  //Add push and pop around bee
  //Translate to center of bee scale and then translate back
  push();
  translate(180, -200);
  strokeWeight(5);
  push();
  translate(x + 150, y + 50);
  rotate(1);
  fill(250, 230, 255);
  ellipse(0, 0, 135, 80);
  line(0, 0, 60, 0);
  pop();

  //stinger
  push();
  fill(255, 255, 255);
  triangle(x + 365, y + 185, x + 340, y + 205, x + 340, y + 175);
  pop();

  //right eye
  push();
  fill(255, 255, 255);
  ellipse(x + 30, y + 220, 50, 70);
  pop();

  //back legs
  push();
  strokeWeight(10);
  line(x + 130, y + 300, x + 100, y + 340);
  line(x + 100, y + 340, x + 85, y + 380);
  line(x + 190, y + 300, x + 160, y + 340);
  line(x + 160, y + 340, x + 145, y + 380);
  line(x + 250, y + 300, x + 220, y + 340);
  line(x + 220, y + 340, x + 205, y + 380);
  pop();

  //body
  fill(250, 190, 50);
  ellipse(x + 200, y + 200, 300, 250);

  //stripes
  push();
  noStroke();
  fill(0, 0, 0);
  beginShape();
  vertex(x + 110, y + 100);
  bezierVertex(x + 110, y + 100, x + 170, y + 170, x + 130, y + 310);
  bezierVertex(x + 130, y + 310, x + 150, y + 320, x + 170, y + 325);
  bezierVertex(x + 170, y + 325, x + 210, y + 200, x + 150, y + 80);
  bezierVertex(x + 150, y + 80, x + 130, y + 80, x + 110, y + 100);
  endShape();
  pop();

  push();
  fill(0, 0, 0);
  beginShape();
  vertex(x + 200, y + 75);
  bezierVertex(x + 200, y + 85, x + 270, y + 150, x + 225, y + 325);
  bezierVertex(x + 225, y + 325, x + 250, y + 320, x + 290, y + 300);
  bezierVertex(x + 290, y + 300, x + 310, y + 140, x + 270, y + 90);
  bezierVertex(x + 270, y + 90, x + 265, y + 95, x + 260, y + 85);
  endShape();
  pop();

  //front wing
  push();
  translate(x + 230, y + 50);
  rotate(-1);
  fill(250, 250, 255);
  ellipse(0, 0, 135, 80);
  line(10, 0, -50, 0);
  pop();

  //head
  push();
  fill(0, 0, 0);
  ellipse(x + 60, y + 220, 80, 110);
  pop();

  //left eye
  push();
  fill(255, 255, 255);
  ellipse(x + 70, y + 220, 50, 70);
  pop();

  //front legs
  push();
  strokeWeight(10);
  line(x + 145, y + 300, x + 175, y + 340);
  line(x + 175, y + 340, x + 190, y + 380);
  line(x + 205, y + 300, x + 235, y + 340);
  line(x + 235, y + 340, x + 250, y + 380);
  line(x + 265, y + 300, x + 295, y + 340);
  line(x + 295, y + 340, x + 310, y + 380);
  pop();
  pop();
}

function flower(flowerX, flowerY) {
  push();
  stroke(25, 94, 30);
  strokeWeight(15);
  line(350, 500, 350, 700);
  stroke(0);
  strokeWeight(1);
  translate(350, 500);
  fill(255, 192, 203);
  ellipse(0, -60, 90, 60);
  ellipse(-50, -50, 90, 60);
  ellipse(50, -50, 90, 60);
  ellipse(-110, -20, 90, 60);
  ellipse(110, -20, 90, 60);
  fill(250, 230, 100);
  ellipse(flowerX, flowerY, 250, 100);
  fill(255, 192, 203);
  ellipse(-120, 10, 90, 60);
  ellipse(-110, 30, 90, 60);
  ellipse(-70, 50, 110, 60);
  ellipse(120, 10, 90, 60);
  ellipse(110, 30, 90, 60);
  ellipse(70, 50, 110, 60);
  ellipse(0, 60, 110, 60);
  pop();
}

function draw() {
  background(130, 200, 250);
  if (state === "start") {
    startScreen();
  } else if (state === "game") {
    gameScreen();
    push();
    scale(0.3);
    bee(x, y);
    pop();
    y = y + velocityY;
    velocityY = velocityY + acceleration;
    keyPressed();
    console.log(y * 0.3);

    if (y * 0.3 > 440 && velocityY > 15) {
      state = "result";
      y = 200;
      velocityY = 0.3;
    } else if (y * 0.3 > 440 && velocityY < 15) {
      state = "won";
      y = 200;
      velocityY = 0.3;
    }
  } else if (state === "result") {
    resultScreenGameOver();
  } else if (state === "won") {
    resultScreenWon();
  }
}

function mouseClicked() {
  if (state === "start") {
    state = "game";
  } else if (state === "game") {
    state = "game";
  } else if (state === "result") {
    state = "game";
  } else if (state === "won") {
    state = "game";
  }
}
