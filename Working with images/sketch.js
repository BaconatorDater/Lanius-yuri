// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let lionL, lionR;
let pinImages = [];
let current = 0; //pinwheel curr index

async function loadAssets(){
  //load lions
  lionL = loadImage("assets/lion-left.png")
  lionR = loadImage("assets/lion-right.png")
  for(let i = 0; i <= 8; i++){
    pinImages.push(loadImage("assets/pin-0"+i+".png"))
  }

}

async function setup() {
  createCanvas(1000, 1000);
  await loadAssets();

}

function draw() {
  background(220);
  if(mouseX >= 500){
    image(lionL, mouseX - 150, mouseY - 125);
  }else if(mouseX <= 500){
    image(lionR, mouseX - 150, mouseY - 125);
  }
  //image(pinImages,500,1000)
}
