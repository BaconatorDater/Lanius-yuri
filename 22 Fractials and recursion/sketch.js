// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  luckySquare(width/2, height/2, 200)
  //circleFractal(width/2, height/2, 400)
}


function luckySquare(x,y,s){
  rectMode(CENTER);
  if (s > 10){
    square(x,y,s);
    luckySquare(x-s/2, y - s/2, s*0.4);
    luckySquare(x+2/s, y-s/2, s*0.4);
  }
}
function circleFractal(x,y,d){
  noFill();
  if(d > 10){
    circle(x,y,d);
    circleFractal(x - d/2, y, d/2);
    circleFractal(x + d/2, y, d/2);
  }
}


function centerCricle(x,y,d){
  if(d>10){
    //recursive case
    circle(x,y,d);
    centerCircle(x,y,d * 0.95);
  }
}