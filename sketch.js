function setup() {
  createCanvas(400, 400);
}

// var size = 30;
// var sinus1 = 0;
// var sinus2 = 0;
// var sinus3 = 0;
// var pos = 50;
// var offsetPhase = 0;

// var r = 100;
// var angle = 0;

function draw() {
  background(220);
  fill(0);

  for (let i = 0; i < 10; i++) {

    var s = size*(sin(offsetPhase+frameCount*0.02));
    s = constrain(s, 10, 100);

    circle(200+r*cos(angle),200+r*sin(angle),s);
    // pos += 15;
    angle += 360/40;
    // r+= 1.5;
    offsetPhase += 0.12;

  }

  r = 100;
  angle = 0;
  // pos = 50;
  offsetPhase = 0;

}


