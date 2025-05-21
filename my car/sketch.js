function setup() {
  createCanvas(650, 400);
  background("rgb(220,213,227)");

  push();
  fill("green");
  noStroke();
  translate(273,100);
  triangle(100,110,150,100,20,10);
  pop();
  

  push();
  fill("rgb(93,222,169)");
  noStroke();
  translate(273, 100);
  triangle(90, 70, 90, 100, 15, 10);
  pop();

  fill("rgb(13,3,13)");
  noStroke();
  ellipse(225, 193, 40, 50);
  ellipse(300, 190, 40, 80);

  fill("violet");
  noStroke();
  rect(160, 195, 325, 85);
  ellipse(189, 235, 200, 90);
  ellipse(450, 233, 240, 90);

  fill("violet");
  ellipse(175, 260, 80, 80);
  ellipse(450, 260, 40, 50);

  fill("#717672");
  ellipse(155, 260, 80, 80);
  ellipse(450, 260, 80, 80);

  fill("#717672");
  ellipse(155, 260, 80, 80);
  ellipse(450, 260, 80, 80);

  fill("white");
  ellipse(155, 260, 30, 30);
  ellipse(450, 260, 30, 30);

  fill("#717672");
  ellipse(175, 260, 30, 30);
  ellipse(450, 260, 30, 30);

  push();
  translate(130, 220);
  rotate(radians(66));
  fill("orange");
  stroke(4);
  strokeWeight(1);
  ellipse(0, 0, 10, 40);
  pop();

  push();
  translate(310, 210);
  rotate(radians(90));
  fill("black");
  noStroke(1);
  rect(0, 0, 8, 30);
  pop();

  push();
  translate(510, 210);
  rotate(radians(-30));
  fill("white");
  stroke(0);
  strokeWeight(1);
  ellipse(0, 0, 20, 30);
  pop();

  
  fill("green");
  stroke(0);
  strokeWeight(1);
  ellipse(410, 222, 10, 10);

  fill("black");
  rect(350, 180, 10, 20);

  fill("gray");
  ellipse(350, 180, 30, 20);
}


