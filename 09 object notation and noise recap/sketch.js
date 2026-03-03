// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(windowWidth, windowHeight);
  ball = {
    x: 300,     y:400,    size:20,
    c: color(random(255),random(255),random(255)),
    timeX: 5, timeY: 5, timeOff:0.06
  }
}

function moveBall(b){
  let dx = noise(b.timeX);
  dx = map(dx, 0, 1, -5, 5);
  let dy = noise(b.timeY);
  dy = map(dy, 0, 1, -5, 5);
  
  b.timeX += b.timeOff; b.timeY += b.timeOff;

  b.x +=dx; b.y += dy;
}


function draw() {
  background(220);
}
