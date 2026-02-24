// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let cX = 0;
function setup() {
  createCanvas(windowWidth, windowHeight);
}


function movingBall(){
  cX += 5;
  if(cX > width) cX = 0;
  circle(cX, 50, 25);
}

function circleLine(y,size){
  //use this function to draw a line of circles, y is height
  let xStart = width * 0.1;
  let xEnd = width * 0.9;

  for(let x = xStart; x < xEnd; x += size){

    circle(x,y,size)
  }

}


function draw() {
  background(220);
  movingBall();
  circleLine(10*0.35, 40);
}
