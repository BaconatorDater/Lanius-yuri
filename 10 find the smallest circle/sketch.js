// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let NUM_CIRCLES = 10;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function circles(){
  let count = 0;
  while(count < NUM_CIRCLES){
    let x = random(0, width);
    let y = random(0,height);
    let s = random(10,150);
    circle(x, y, s);
    count++
  }
}

function renderCircles(){
  let smallest = circles[0].s;
  for (let c of cirles){
    noFill();
    circle(c.x, c.y, c.s);
    if(c.s < smallest){
      smallest = c.s;
    }
  }
}


function draw() {
  background(220);
  circles()
}
