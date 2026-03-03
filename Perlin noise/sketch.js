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

function generateTerrain(){
  strokeWeight(rectWidth)
  //using a loop to make a number of rectangles with random height.
  for(let x = 0; x < width; x+=rectWidth){
    //generate random negative height.
    //replace this with noise()
    let rectHeight = random(0, height*0.75);


    rect(x,height,rectWidth,-rectHeight);
  }
}

fiunction 
function draw() {
  //locks in this as a starting point (seed 25 from random, the next one will be seed 26, etc.)
  randomSeed(25);
  //stabilize once per frame.
  background(220);
  generateTerrain()

}
