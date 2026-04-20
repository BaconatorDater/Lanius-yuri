// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let car;
let truck;

function setup() {
  createCanvas(500, 500);
  car = new Vehicle(0);
}

function draw() {
  background(220);
}

class Vehicle{
  constructor(dir){
   //type, x, y, xSpeed, c, direction
   this.x = 0; //random  OR
   this.dir = dir;   
   //pick lane based on direction
   if(this.dir === 0 ){ //top lane type actual coords later
    this.y = random(100,200);
   } //bottom line
   else this.y = random(500,600);
  }
}