// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let sunx = 0;
let suny = 0; //variables for celestial obj. tracking
let moony = 0;
function setup() {
  createCanvas(500, 500);
}

function scene(){
  sunx = mouseX
  suny = mouseY
  moony = mouseY - 400
  if (suny < 440){ // do we draw a sun or a moon?
    fill(252, 186, 3)
    circle(sunx,suny,90)
  } else if (suny > 440){
    fill(255,255,255)
    circle(sunx,moony,90)
  }
  fill(0,100,0)
  rect(0, 400, 500, 200)
  triangle(130,375,230,375,180,250)
  fill(133, 124, 99)
  rect(170,400,25,-25)

}

function daynightcycle(){
  background(220)
  if (suny < 200){
    background(44, 142, 212) //day
  } else if (suny > 200 &&  suny < 440){
    background(163, 112, 29) //sunset
  } else if (suny > 440){
    background(15, 66, 102) //night
  }
}

function displayMouse(){
  textSize(40);
  textAlign(LEFT, TOP)
  fill(0,0,0);
  text(mouseX + "," + mouseY,    mouseX, mouseY); //debug stuff to easier measure where sun is and where coords are
}



function draw() {
  daynightcycle();
  scene()
  displayMouse()
}
