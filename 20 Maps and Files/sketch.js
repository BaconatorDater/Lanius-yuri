// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let textFile;
let imgFile, rols, cols, colorMap;

function preload(){
  textFile = loadStrings("assets/info.txt")
  imgFile = loadStrings("assets/colorimage.txt")
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  // loadAssets()
  noLoop();

  //determine # of rows and cols
  rows = imgFile.length
  cols = imgFile[0].length

  colorMap = new Map([
    ["b", "black"],
    ["w", color(255)],
    ["r", "red"],
    ["l", "brown"],
    ["p", "purple"]




  ]);
}

function drawImage(){
  let pixelSize = 50;
  for(let y = 0; y < rows; y ++){
    let currentRow = imgFile[y];
    for(let x = 0; x < cols; x++){
      let currentKey = currentRow[x];
      fill(colorMap.get(currentKey));
      square(x*pixelSize, y*pixelSize, pixelSize);
    }
  }
}

function draw() {
  background(220);
  drawImage()
}


function processText(){
  //3 different ways to split up larger strings into words
  //split() and spread syntax
  print("split this into words")
  let splitWords = textFile[0].split("");
  print(splitWords);

  print("Split into characters")
  let splitChars = textFile[1].split("");
  print(splitChars);

  print("spread into characters")
  let spreadChars =[...textFile[2]];
  print(spreadChars);
}
