// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function checkMulti(){
  //a function to demnstrate how we can check if multiple buttons are pressed at once.

  strokeWeight (mouseX / 10);
  stroke(255,255,0)
  let a = keyIsDown(65)
  let b = keyIsDown(66)
  let c = keyIsDown(67)

  let str = "a: " + a + " b: " + b + " c: " + c;
  textSize(40);
  text(str, 100, 300);
}

function forg(){
  circle(170,160,25)
  rect(150,200,20,100)
  rect(230,200,20,100)
  rect(150,290,-10,10)
  rect(230,290,30,10)
  fill(204,102,0)
  circle(200,200,100)
  fill(0,0,0)
  circle(175,200,30)
  circle(225,200,30)
}


function draw() {
  background(220);
  forg()
  //checkMulti();
}
