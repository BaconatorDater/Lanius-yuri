// Project Title
// Your Name
// April 22, 2026
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
  //createCanvas(myImage.width, myImage.height);
  //pixelDensity(1);
  createCanvas(640,480);
  //myVideo = createCapture(VIDEO);
  pixelDensity(1);
  //myvideo.hide();
}

function draw() {
  background(0);
  image(myImage, 0,0);
  loadPixels();
  //colorSetter();
  //textImage();
  //for(let i = 0; i < 500; i+=4){
  //  pixels[i] = 255;
  //}
  updatePixels();
}

//function textImage(){
//  
//  let scaleAmount = 5;
//  textSize(scaleAmount);
//
//  for(let x = 0; x < width; x+= scaleAmount){
//    for(let y = 0; y < height; y += scaleAmount){
//      fill(0,255,0);
 //     let avg = getAvg(x,y);
//      if(avg > 150) text("[]", x, y);
//      if(avg > 100) text("{}", x, y);
//      if(avg > 50) text("()", x, y);
 //   }
//  }
//}



//ASSIGNMENT 1
function colorSetter(){
  for(let i = 0; i<pixels.length; i+=4){
    let r = pixels[i];
    let g = pixels[i+1];
    let b = pixels[i+2];

    if(b >= r && b >= g){
      setPixel1D(i,0,0,255)
    }
    if(r >= g && r >= b){
      setPixel1D(i,255,0,0)
    }
    if(g >= r && g >= b){
      setPixel1D(i,0,255,0)
    }
  }
}



//ASSIGNMENT 2
function greenDeleter3000(){
  for(let x = 320;x < width; x++){
    for(let y = 0;y < height; y++){
      //placeholder

    }
  }
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
  let index = ((y*width) + x)*4;
  let r = pixels[index]
  let g = pixels[index+1]
  let b = pixels[index+2]

  return(r+g+b)/3;
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