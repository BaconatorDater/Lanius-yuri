// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let d1, d2;
let minSize = 5; let maxSize = 200;
let x1, x2, y1, y2;

function setup() {
  createCanvas(windowWidth, windowHeight);
  x1 = width * 0.3; y1 = height * 0.5;
  x2 = width * 0.7; y2 = height * 0.5;
  frameRate(10)
}
//im way too far behind
function draw() {
  background(0);
  stars();
  randomCircle()
}

function stars(){
  fill(255);
  for(let i = 0; i<100;i++){
  let x = random(0,width);
  let y = random(0, height);
  circle(x,y,6)
  }
}

function randomCircle(){
  //fixed circle with a changing diameter.
  let d1, d2;
  let minSize = 5; let maxSize = 200;
  let x1, x2, y1, y2;

  fill(120,180,60);
  d1 = random(minSize, maxSize);
}