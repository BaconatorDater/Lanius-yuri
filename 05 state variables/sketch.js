// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let shapeState = 0;


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
}

function drawshape() {
  switch(shapeState){
    case 0:
      circle(width/2, height/2, 150);
      break;
    case 1:
      square(width/2, height/2, 150);
      break;
    case 2:
      triangle(x-50, y+50, x+50, y+50, x, y-25)
      break;
    case 3:
      for(let i = 0; i < 30; i++){
        let x2 = random (x-80, x+80);
        let y2 = random (y-80, x+80);
        break;
      }
  }
}

function manageTime(){
  let elapsedTime = millis() - StartTime;
}