// Day & night cycle in JS
// Iskander Baizrakhman
// 2/12/2026
//
// Extra for Experts:
// I made sun and moon tracking, kinda wish that both were more complex tho
let sunx = 0;
let suny = 0; //variables for celestial obj. tracking
let moony = 0;
function setup() {
  createCanvas(500, 500);
}

function scene(){
  sunx = mouseX
  suny = mouseY
  moony = mouseY - 350
  if (suny < 440){ // do we draw a sun or a moon?
    fill(252, 186, 3)
    circle(sunx,suny,90)
  } else if (suny > 440){
    fill(255,255,255)
    circle(sunx,moony,90)
  }
  fill(0,100,0) //other thingamajings for the background
  rect(0, 400, 500, 200)
  triangle(130,375,230,375,180,250)
  fill(133, 124, 99)
  rect(170,400,25,-25)
  fill(30, 105, 227)
  rect(300,400,50,100)
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

function theguy(){ //its THE guy, or atleast the protag for the assignment
  if (suny < 200){ // guy is outside
    fill(30, 105, 227)
    rect(250,375,25,25)
    fill(210,161,140)
    circle(262,370,30)
  } else if (suny > 200 && suny < 440){ // guy is leaving
    fill(30, 105, 227)
    rect(50,375,25,25)
    fill(210,161,140)
    circle(62,370,30)
  }
}

function waterfart(){ //watermart, i mean the marterwark, i mean the marterfark, i mean the watermark
  text("Iskander Baizrakhman",50, 450)
}

function displayMouse(){
  textSize(40);
  textAlign(LEFT, TOP)
  fill(0,0,0);
  text(mouseX + "," + mouseY,    mouseX, mouseY); //debug stuff to easier measure where sun is and where coords are
}



function draw() { //executes everything
  daynightcycle();
  scene()
  displayMouse()
  theguy()
  waterfart()
}
