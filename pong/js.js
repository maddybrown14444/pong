// Pong by Adam

// Setup canvas and context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 500;

// Global Variables
Wkeyispressed = false;
Skeyispressed = false;
DownArrowispressed = false;
UpArrowispressed = false;

let paddel1Y = 200;
let paddel2Y = 200;
let ballx = 400;
let bally = Math.random() * 480;
let ballyspeed = 5;
let ballxspeed = 5;
let paddelL = 120;
let paddel1X = 10;
let paddel2X = 780;
let firstHit = 0;
let paddelSpeed = 15;

let scorep1 = 0;
let scorep2 = 0;
// Main animation loop
requestAnimationFrame(draw);

function draw() {
  // Logic

  ballx -= ballxspeed;
  bally -= ballyspeed;

  if (firstHit === 1) {
    //up speed
    ballxspeed = ballxspeed + 1;
    ballyspeed = ballyspeed + 1;
    firstHit++;
  }

  // Paddle 1
  if (paddel1Y >= 0 && Wkeyispressed) {
    paddel1Y -= paddelSpeed;
  }

  if (paddel1Y <= 400 && Skeyispressed) {
    paddel1Y += paddelSpeed;
  }
  //Paddel 2
  if (paddel2Y >= 0 && DownArrowispressed) {
    paddel2Y -= paddelSpeed;
  }

  if (paddel2Y <= 400 && UpArrowispressed) {
    paddel2Y += paddelSpeed;
  }

  if (
    ballx < paddel1X + 10 &&
    ballx + 20 > paddel1X &&
    bally + 20 > paddel1Y &&
    bally < paddel1Y + 100
  ) {
    ballx = 20;
    ballxspeed = -ballxspeed;
    firstHit++;
    ballxspeed = ballxspeed * 1.1;
    ballyspeed = ballyspeed * 1.1;
    paddelSpeed * 1.2;
  }

  if (
    ballx < paddel2X + 10 &&
    ballx + 20 > paddel2X &&
    bally + 20 > paddel2Y &&
    bally < paddel2Y + 100
  ) {
    ballx = 760;
    ballxspeed = -ballxspeed;
    firstHit++;
    ballxspeed = ballxspeed * 1.1;
    ballyspeed = ballyspeed * 1.1;
    paddelSpeed = paddelSpeed * 1.2;
  }
  //Ball
  if (bally >= 480 || bally <= 0) {
    ballyspeed = -ballyspeed;
  }

  // Safety
  if (bally < 0) {
    bally = 0;
  }
  if (bally === 500) {
    bally = 480;
  }

  // Scoring
  if (ballx < 0) {
    bally = Math.random() * 480;
    ballx = 400;
    firstHit = 0;
    ballyspeed = 5;
    ballxspeed = 5;
    ballxspeed = +ballxspeed;
    paddelSpeed = 15;
    scorep2++;

    if (scorep2 === 9) {
      scorep2 = 0;
      scorep1 = 0;
    }
    console.log("player two scored " + scorep2 + " time(s)");
  }

  if (ballx > 850) {
    bally = Math.random() * 480;
    ballx = 400;
    firstHit = 0;
    ballyspeed = 5;
    ballxspeed = 5;
    ballxspeed = -ballxspeed;
    paddelSpeed = 15;
    scorep1++;
    if (scorep1 === 9) {
      scorep1 = 0;
      scorep2 = 0;
    }
    console.log("player one scored " + scorep1 + " time(s)");
  }

  // DRAWING

  // Black Backgroundws
  ctx.fillStyle = "pink";
  ctx.fillRect(0, 0, cnv.width, cnv.height);

  // Center line
  ctx.strokeStyle = "white";
  ctx.lineWidth = 20;
  ctx.beginPath();
  ctx.setLineDash([20, 20]);
  ctx.moveTo(410, 500);
  ctx.lineTo(410, 0);
  ctx.stroke();

  // Left Paddle
  ctx.fillStyle = "white";
  ctx.fillRect(paddel1X, paddel1Y, 10, 100);

  // Right Paddle
  ctx.fillStyle = "white";
  ctx.fillRect(paddel2X, paddel2Y, 10, 100);

  // Ball
  ctx.fillStyle = "red";
  ctx.fillRect(ballx, bally, 20, 20);

  // scoring attempt
  ctx.font = "100px Arial";
  ctx.fillStyle = "white";
  ctx.fillText(scorep1, 150, 100);
  8;

  ctx.font = "100px Arial";
  ctx.fillStyle = "white";
  ctx.fillText(scorep2, 600, 100);

  requestAnimationFrame(draw);
}

// EVENT STUFF
document.addEventListener("keydown", keydownHandler);
document.addEventListener("keyup", keyupHandler);

function keydownHandler(event) {
  if (event.keyCode == 87) {
    Wkeyispressed = true;
  }
  if (event.keyCode == 83) {
    Skeyispressed = true;
  }
  if (event.keyCode == 38) {
    DownArrowispressed = true;
  }
  if (event.keyCode == 40) {
    UpArrowispressed = true;
  }
}

function keyupHandler(event) {
  if (event.keyCode == 87) {
    Wkeyispressed = false;
  }
  if (event.keyCode == 83) {
    Skeyispressed = false;
  }
  if (event.keyCode == 38) {
    DownArrowispressed = false;
  }
  if (event.keyCode == 40) {
    UpArrowispressed = false;
  }
}
