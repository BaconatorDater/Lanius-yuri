// baisics of coord system
// Iskander Baizrakhman
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
//in python we wrote run to completion programs
// that start at the top and end at the bottom.
//with p5.js we write interactive programs.
//Those programs can run either once (setup()) or
//those that run over and over (draw())
//Former is like an instant ability in ftl:mv while
//latter is like a toggle ability in ftl:mv

//global variables collection
let circleX = 250;
let circleY = 200;



function setup() {
  createCanvas(500, 500);
}

function draw() {
  //aim to keep this tidy
  
  
  background(100); //wipes the screen
  fill(50)
  stroke("#033485")
//       x    y    diameter
  circle(circleX , circleY, 50)
  secondcrcle()
  cornerupleft()
  cornerupright()
  cornerdownleft()
  cornerdownright()
}
function secondcrcle() {
  fill("red");
  circle(150, 150, 75)
}

function cornerupleft() {
  fill("Orange");
  circle(500,500,50)
}
function cornerupright() {
  fill("Orange");
  circle(0,500,50)
}
function cornerdownleft() {
  fill("orange");
  circle(500,0,50)
}
function cornerdownright() {
  fill("Orange");
  circle(0,0,50)
}
