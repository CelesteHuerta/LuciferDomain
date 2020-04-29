let input;
let button;
let myString;
let slider;
let sliderValue;
let sel;
let itemSelected;


var dragging = false; // Is the object being dragged?
var rollover = false; // Is the mouse over the ellipse?

var x, y, w, h;          // Location and size
var offsetX, offsetY;    // Mouseclick offset

function setup() {
  createCanvas(640, 360);

  // Starting location
  x = 300;
  y = 100;
  // Dimensions
  w = 75;
  h = 50;
}

function draw() {
  background(255);


  // Is mouse over object
  if (mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h) {
    rollover = true;
  }
  else {
    rollover = false;
  }

  if (dragging) {
    x = mouseX + offsetX;
    y = mouseY + offsetY;
  }

  stroke(0);
  // Different fill based on state
  if (dragging) {
    fill (50);
  } else if (rollover) {
    fill(100);
  } else {
    fill(175, 200);
  }
  rect(x, y, w, h);
}

function mousePressed() {
  if (mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h) {
    dragging = true;
    offsetX = x-mouseX;
    offsetY = y-mouseY;
  }
}

function mouseReleased() {
  dragging = false;
}
