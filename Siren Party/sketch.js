var mySound;
var button;

function preload() {
  mySound = loadSound('/samples/Horn.wav');
  createCanvas(600, 600);
  background(255);
}

function setup() {

  // button function
  button = createButton('Party Time?');
  button.position(50, 50);
  button.mousePressed(Hornsy);
}

  // Play sound
  function Hornsy() {
    mySound.setVolume(0.1);
    mySound.play();
}

//function draw() {

//}