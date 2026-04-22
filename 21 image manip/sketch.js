// Project Title
// Your Name
// April 22, 2026
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let myImage;

function preload(){
  //called BEFORE setup, wont conclude untill all loads are complete
    myImage = loadImage("libraries/assets/aviator.png")
}

function setup() {
  createCanvas(myImage.width, myImage.height);
  pixelDensity(1);
}

function draw() {
  background(220);
  image(myImage, 0,0);

  //boost()
  loadPixels();
for(let i = 0; i < 500; i+=4){
  pixels[i] = 255;
}
  updatePixels();
}

function boost(){
  let boostAmount = 50;
  for(let i = 0; i<pixels.length; i+=4){
    let r = pixels[i] + boostAmount;
    let g = pixels[i+1] + boostAmount;
    let b = pixels[i+2] + boostAmount;
  }
}

function getAvg(x,y){
  //return avg intensity of rgb
  //at x, y
  let r = pixels[i]
  let g = pixels[i+1]
  let b = pixels[i+2]
}


function greyscale(){
  for (let x = 0; x < width; x++){
    for (let y = 0; y < height; y++){
      let avg = getAvg(x,y);
    }
  }
}


function setPixel(x,y,r,g,b){
  //use 1d set pixl with translated numbers
  for(let i)
  pixels[pos] = r;
  pixels[pos+1] = g;
  pixels[pos+2] = b;
  setPixel1D(i,r,g,b);
}

function setPixel1D(pos, r, g, b){
  //pos is 1d location of the pixel's red component
  //rgb is the colour values (0-255)
  pixels[pos] = r;
  pixels[pos+1] = g;
  pixels[pos+2] = b;
}