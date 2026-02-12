// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(500, 500);
}

function scene(){
  fill(252, 186, 3)
  circle(110,110,90)
  fill(0,100,0)
  rect(0, 400, 500, 200)
  triangle(130,375,230,375,180,250)
  fill(133, 124, 99)
  rect(170,400,25,-25)
}

function displayMouse(){
  textSize(40);
  textAlign(LEFT, TOP)
  fill(0,0,0);
  text(mouseX + "," + mouseY,    mouseX, mouseY);
}


function draw() {
  background(220);
  scene()
  displayMouse()
}
