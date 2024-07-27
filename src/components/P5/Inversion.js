export default function Inversion(p) {
  function setup() {
    p.createCanvas(450, 500);
  }

  let delta = 0;

  function draw() {
    p.background("#111111");

    p.fill("rgb(68,148,255)");
    p.stroke(25);
    p.strokeWeight(2);
    p.beginShape();
    p.vertex(0, 0); // start at top left
    for (let x = 0; x < p.width; x++) {
      const nextAngle = x * 0.1 + delta; // incline angle
      const y = p.sin(nextAngle) * 10 + p.height / 2;
      p.vertex(x, y);
    }
    p.vertex(p.width, p.height); // end at bottom right
    p.endShape();

    p.fill("rgb(68,194,255)");
    p.stroke(25);
    p.strokeWeight(2);
    p.beginShape();
    p.vertex(p.width, 0);
    for (let x = p.width; x >= 0; x--) {
      const nextAngle = x * 0.1 + delta; // incline angle
      const y = p.sin(nextAngle) * 10 + p.height / 2;
      p.vertex(x, y);
    }
    p.vertex(0, p.height);
    p.endShape();

    p.stroke(255);
    p.line(0, 0, p.width, p.height);
    p.line(p.width, 0, 0, p.height);

    p.stroke("rgb(0,0,0)");
    p.fill("rgb(255,255,255)");
    p.circle(p.width / 2, p.height / 1.25 + p.sin(delta) * 2, 150);
    p.stroke("rgb(255,146,0)");
    p.fill("rgb(255,101,0)");
    p.circle(p.width / 2, p.height / 5 - p.sin(delta) * 2, 150);

    delta += 0.1;
  }

  p.setup = setup;
  p.draw = draw;
}
