// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let ball;
let leftPaddle;
let rightPaddle;

function setup() {
  createCanvas(800, 400);
  
  // Create the ball
  ball = new Ball();
  
  // Create paddles
  leftPaddle = new Paddle(true);
  rightPaddle = new Paddle(false);
}

function draw() {
  background(0);
  
  // Update and display the ball
  ball.update();
  ball.show();
  
  // Update and display paddles
  leftPaddle.show();
  rightPaddle.show();
  
  // Check for collisions
  ball.checkPaddleCollision(leftPaddle);
  ball.checkPaddleCollision(rightPaddle);
  
  // Display score
  fill(255);
  textSize(32);
  text(`Left: ${leftPaddle.score}`, 50, 50);
  text(`Right: ${rightPaddle.score}`, width - 150, 50);

  keyPressed()
}

// Ball class
class Ball {
  constructor() {
    this.size = 20;
    this.reset();
  }
  
  reset() {
    this.position = createVector(width / 2, height / 2);
    this.velocity = createVector(random(-5, 5), random(-5, 5));
    
    // Normalize the speed
    this.velocity.setMag(6);
  }
  
  update() {
    this.position.add(this.velocity);
    
    // Bounce off top and bottom
    if (this.position.y < 0 || this.position.y > height) {
      this.velocity.y *= -1;
    }
    
    // Reset ball if it goes beyond left or right
    if (this.position.x < 0) {
      rightPaddle.score++;
      this.reset();
    } else if (this.position.x > width) {
      leftPaddle.score++;
      this.reset();
    }
  }
  
  show() {
    fill(255);
    ellipse(this.position.x, this.position.y, this.size);
  }
  
  checkPaddleCollision(paddle) {
    if (this.position.x - this.size / 2 < paddle.position.x + paddle.width &&
        this.position.x + this.size / 2 > paddle.position.x &&
        this.position.y - this.size / 2 < paddle.position.y + paddle.height &&
        this.position.y + this.size / 2 > paddle.position.y) {
      this.velocity.x *= -1; // Reverse ball direction
      let diff = this.position.y - (paddle.position.y + paddle.height / 2);
      this.velocity.y += diff / 10; // Add some spin
    }
  }
}

// Paddle class
class Paddle {
  constructor(isLeft) {
    this.width = 10;
    this.height = 80;
    this.position = createVector(isLeft ? 0 : width - this.width, height / 2);
    this.score = 0;
  }
  
  show() {
    fill(255);
    rect(this.position.x, this.position.y, this.width, this.height);
  }
  
  move(up) {
    if (up) {
      this.position.y -= 10;
    } else {
      this.position.y += 10;
    }
    
    // Constrain paddles to the canvas
    this.position.y = constrain(this.position.y, 0, height - this.height);
  }
}

// Control the left paddle with 'W' and 'S' keys
function keyPressed() {
  if (key === 'w' || key === 'W') {
    leftPaddle.move(true); // Move up
  } else if (key === 's' || key === 'S') {
    leftPaddle.move(false); // Move down
  }
}