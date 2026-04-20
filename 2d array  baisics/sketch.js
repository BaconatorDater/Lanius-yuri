// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
//grid needs to be 6 x 5

let grid =[
  [0, 0, 0, 255, 0, 255],
  [255, 0, 255, 0, 255, 0],
  [0, 0, 0, 0, 0, 255],
  [255, 255, 255, 255, 255, 0],
  [0, 255, 0, 0, 0, 255]
];
let rows = grid.length;
let cols = grid[0].length;
let titleSize = 60;


function CheckScore(colour){
  return colour === (cols*rows)*255
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function winsum(){
  let totalsum = 0
  for(let y = 0;y < rows; y++){
    for(let x = 0;x< cols; x++){
      totalsum = totalsum + grid[y][x]
    }
  }
  if (totalsum === (6*5) * 255 || totalsum === 0){
    text("Yoy Win!!!!!!!!!!!!", windowWidth/2, windowHeight/2)
  }
}
function draw() {
  background(220);
  renderGrid();
  textSize(20);
  fill(255,0,0)
  text(getCurrentX() + "," + getCurrentY(),mouseX,mouseY)
  winsum()
}

function flip(x,y){
  if(grid[y][x] === 0) grid[y][x] = 255;
  else grid[y][x] = 0;
}


function mousePressed(){
  if(mouseX < width && mouseY < height){
    let x = getCurrentX();
    let y = getCurrentY();

    //flip(getCurrentX(), getCurrentY);

    //allways
    flip(x,y)

    if(x-1 >= 0) flip(x-1, y);
    if(y-1 >= 0) flip(x, y-1);

  }
}
function renderGrid(){
  //draw date from 2d array (the grid)
  for(let y = 0; y < rows; y++){
    for(let x = 0; x < cols; x++){
      let fillColor = grid[y][x];
      fill(fillColor);
      square(x*titleSize, y*titleSize, titleSize)
    }
  }
}

function getCurrentX(){
  //determine current col position of the mouse
  let constrainedX = constrain(mouseX, 0, width-1);
  return floor(constrainedX / titleSize);

}

function getCurrentY(){
  let constrainedY = constrain(mouseY, 0, width-1);
  return floor(constrainedY/titleSize);
}