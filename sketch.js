const heart = [];
let a = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255, 100, 100);
  translate(width / 2, height / 2);

  noFill();
  stroke(255, 50, 50);
  strokeWeight(4);

  beginShape();
  for (let v of heart) {
    vertex(v.x, v.y);
  }
  endShape();
  const r = height / 40;
  const x = r * 16 * pow(sin(a), 3);
  const y = -r * (13 * cos(a) - 5 * cos(2 * a) - 2 * cos(3 * a) - cos(4 * a));
  heart.push(createVector(x, y));

  stroke(255, 50, 50, a * 25);
  strokeWeight(2);
  textAlign(CENTER);
  textSize(25);
  text("Happy Anniversary !!!", 0, 0);
  text("Mom & Dad", 0, 25);
  text("❤", 0, 50);
  a += 0.01;
}
