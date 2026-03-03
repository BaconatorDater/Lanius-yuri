// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let x = 50;
let y = 0;
function setup() {
  createCanvas(500, 500);
}

function movingBall(){
  cX += 5;
  if(cX > width) cX = 0;
  circle(cX, 50, 25);
}

//i fucking hate this piece of shit holy fuck
function draw() {
  background("gray");
  fill("black");
  rect(x, y, 25, 25)
}