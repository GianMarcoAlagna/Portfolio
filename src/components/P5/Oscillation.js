export default function Oscillation(p) {
  function setup() {
    p.createCanvas(450, 500);
  }

  let delta = 0;
  function draw() {
    p.background("#141414");
    p.fill("rgb(255,42,42)");
    p.stroke(255);

    p.strokeWeight(2);
    p.beginShape();
    p.vertex(p.width, p.height);

    for (let x = 0; x < p.width; x++) {
      const nextAngle = x * 0.1 + delta;
      const y = p.sin(nextAngle) * 400 + p.height / 2;
      p.vertex(x, y);
    }

    p.vertex(0, p.height);
    p.endShape();
    p.textSize(24);

    delta += 0.05;
  }

  p.setup = setup;
  p.draw = draw;
}
