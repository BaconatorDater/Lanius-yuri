// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let rectWidth = 1
function setup() {
  createCanvas(500, 500);
}

let highestheight = 0
let highestX = 0

function noiseGen(){
  strokeWeight(rectWidth)
  //using a loop to make a number of rectangles with random height.
  for(let x = 0; x < width; x+=rectWidth){
    //generate random negative height.
    //replace this with noise()
    let rectHeight = random(0, height*0.75);


    rect(x,height,rectWidth,-rectHeight);
    if (rectHeight >= highestheight){
      //which line is the highest
      highestheight = rectHeight
      highestX = x
    }
  }
}


function falg(){
  fill(255,0,0)
  circle(highestX,500-highestheight,15)
  line(highestX,500-highestheight,highestX,510-highestheight)
}


function draw() {
  //locks in this as a starting point (seed 25 from random, the next one will be seed 26, etc.)
  randomSeed(26);
  //stabilize once per frame.
  background(220);
  noiseGen()
  falg()

}
