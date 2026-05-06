// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let myImage;
let myVideo;
function preload(){
  //called BEFORE setup, wont conclude untill all loads are complete
    myImage = loadImage("libraries/assets/chip.jpg")
}

function setup() {
  createCanvas(myImage.width, myImage.height);
}

function draw() {
  background(220);
  image(myImage, 0, 0);
  loadPixels();
  boost();
  updatePixels();
}

function boost(){
  
  for(let i = 0; i<pixels.length; i+=4){
    let r = pixels[i]
    let g = pixels[i+1]
    let b = pixels[i+2]
    if(r > b && r > g) setPixel1D(i, 255,0,0);
    if(b > r && b > g) setPixel1D(i, 0,0,255);
    if(g >= b && g >= b) setPixel1D(i, 0,255,0);
  }

}

function setPixel(x,y,r,g,b){
  //use 1d set pixl with translated numbers
  //ssfor(let i)
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