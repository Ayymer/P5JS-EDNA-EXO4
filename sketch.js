function setup() {
  createCanvas(400, 400);
}

var size = 20;
var sinus1 = 0;
var sinus2 = 0;
var sinus3 = 0;
var pos = 50;
var offsetPhase = 0;

function draw() {
  background(220);
  fill(0);
  for (let i = 0; i < 20; i++) {
    circle(200, pos, size*sin(offsetPhase+frameCount*0.1));
    pos += 15;
    offsetPhase += 0.5;
  }

  pos = 50;
  offsetPhase = 0;

}


