// Text and events
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

//global var
let textShade = 255;
let textScale = 40;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function displayMouse(){
  textSize(40);
  textAlign(LEFT, TOP)
  fill(textShade);
  text(mouseX + "," + mouseY,    mouseX, mouseY);
}


function draw() {
  background(200);
  displayMouse()
  displayKeyboard()
}

function displayKeyboard(){
  textSize(30);
  textAlign(CENTER, CENTER);
  let t = keyIsPressed + ", " + key + ", " + keyCode;
  text(t, width/2, height/2)
}