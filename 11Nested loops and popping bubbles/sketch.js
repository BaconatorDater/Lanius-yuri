// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let bubbleSize = 30;
let bubbles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
}

function drawbubble(){
  for(let b of bubbles){
    circle(b.x, b.y,bubbleSize);
  }
}

function eDist(x1,y1,x2,y2){
  let a = x1-x2;  let b = y1-y2;
  let c = sqrt(pow(a,2) + pw(b,2));
  return c.toFixed(1);
}

function generatePoints(){
  //simple nested loop test to make ordered pairs:
  //x: 0, 30, 60      y:0, 30, 60
  for(let x = 0; x <= 60; x+=30){
    //x: 0, 30, 60
    for(let y = 0; y <= 60; y+=30){
      // y:0, 30, 60
      print(x,y);
      circle(x, y, 30);
    }
  }
}