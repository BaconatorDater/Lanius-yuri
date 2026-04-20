// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let objects = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

class Ball{
  constructor(x,y){
    this.pos = createVector(x,y)
    this.vel = createVector(random(-5,5), -5);
    this.force = createVector(0,0.2);
  }

  calcMouse(){
    //mouse vector "attractor" calculations
    this.force = createVector(mouseX, mouseY);
    this.force.sub(this.pos);
    this.force.normalize(); //set hyp to 1
    this.force.mult(4);
  }

  move(){
    //update velocity and pos vectors
    this.vel.add(this.force);
    this.vel.limit(20);//can't go outside -20 or 20
    this.pos.add(this.vel);
  }

  display(){
    //display the ball
    color(random(0,255),100,100);
    circle(this.pos.x, this.pos.y, 20);
  }
}

function draw() {
  background(220);
  if(mouseIsPressed){
    objects.push(new Ball(mouseX, mouseY));
  }

  //process objects
  for(let o of objects){
    o.move();
    o.display();
  }
}
