// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let x, y;

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = width/2; y = height/2;
  noFill();
  strokeWeight(3);
}

function draw() {
  background(220);
  x = lerp(x,mouseX, 0.05)
  y = lerp(y,mouseY, 0.05)
  circle(x,y,50);

  circle(x,y,50);

  line(x,y,mouseX,mouseY);

  circle(x,y,diameter);

}

function mouseWheel(event){
  print(event.delta);
}