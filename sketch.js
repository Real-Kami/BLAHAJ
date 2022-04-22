let mid_date = 1651312800000;

let ctdwn;

let haj;

let myArr = [1, 1000, 60, 60, 24];
let myArr2 = ["milliseconds : ", "seconds : ", "minutes : ", "hours : ", "days : "];

let sharks = []

function preload() {
  haj = loadImage("haj.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  fill(255);
  background(0);
  textSize(32);

  for (a = 0; a < 5; a++) {

    let k = random(0.5, 1);

    let obj = {
      pos: createVector(width / 2 - haj.width / 2, height / 2 - haj.height / 2),
      vel: createVector(random(1,5), 0),
      k: k,
      l: random(1),
      xdist: (haj.width * k) / 2,
      ydist: (haj.height * k) / 2
    }

    if (obj.l >= 0.5) {
      obj.l = 1;
    } else {
      obj.l = 0;
    }

    obj.vel.rotate(random(TWO_PI));

    sharks[a] = obj;
  }
}

function draw() {

  background(0);

  //image(img, dx, dy, dWidth, dHeight, sx, sy, [sWidth], [sHeight])

  for (a = 0; a < sharks.length; a++) {
    image(haj, sharks[a].pos.x, sharks[a].pos.y, haj.width, haj.height, 0, 190 * sharks[a].l, 380, 190);
    sharks[a].pos.add(sharks[a].vel);
    if (sharks[a].pos.y + sharks[a].ydist >= height || sharks[a].pos.y + sharks[a].ydist <= 0) {
      sharks[a].vel.y *= -1;
    }
    if (sharks[a].pos.x + sharks[a].xdist >= width || sharks[a].pos.x + sharks[a].xdist <= 0) {
      sharks[a].vel.x *= -1;
    }
  }


  ctdwn = mid_date - Date.now();

  text("Blahaj is coming in...", 50, 50)

  for (a = 0; a < myArr.length; a++) {
    ctdwn = ctdwn / myArr[a];
    text(myArr2[a] + round(ctdwn), 50, (a + 2) * 50);
  }
}
