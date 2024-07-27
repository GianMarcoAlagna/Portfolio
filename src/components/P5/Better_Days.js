export default function Better_Days(p) {
  function setup() {
    p.createCanvas(500, 500);
  }

  let t = 0.1;

  function draw() {
    p.background("rgb(52,100,255)");
    const radius = 50;
    p.translate(0, 0.8 * p.height);

    // SUN
    p.stroke(0);
    p.fill(168, 50, 50); // ball color
    p.push();
    p.drawingContext.shadowOffsetX = 0;
    p.drawingContext.shadowOffsetY = 0;
    p.drawingContext.shadowBlur = 200;
    p.drawingContext.shadowColor = p.color(255, 0, 0, 200);
    p.ellipse(p.cos(t) * p.PI * 4, -400, 220);
    p.pop();

    // BEACH
    p.stroke("rgb(255,186,62)");
    p.fill("rgb(255,186,62)");
    polygon(380, 80, 600, 4, 0, 0.5);

    // BEACH_HILL
    p.fill("rgb(255,186,62)");
    polygon(200, -280, 300, 120, 0, 0.4);

    // ROCKY_BOTTOM
    p.stroke("rgb(21,21,21)");
    p.fill("rgb(52,52,52)");
    polygon(380, 420, 600, 4, 0, 0.5);

    // OCEAN
    p.push();
    p.scale(0.5);
    p.stroke("rgb(0,219,255)");
    // const startPoint = radius / p.HALF_PI;
    p.fill("rgb(0,175,255)");
    for (let x = radius / 2; x < p.width * 2; x += radius) {
      for (let y = -radius; y < p.height; y += radius) {
        polygon(x, y, radius, 4, 0, t + y * 0.5);
      }
    }
    p.pop();

    t += 0.015;
  }

  function polygon(x, y, r, sides, addCosine, addSine, angle) {
    p.beginShape();

    const inc = p.TWO_PI / sides;
    const last = p.TWO_PI;
    for (let ang = angle || -p.QUARTER_PI; ang <= last; ang += inc) {
      // What the fuck
      let vX = x + p.cos(ang) * r;
      let vY = y + p.sin(ang) * r;

      vX *= p.cos(addCosine);
      vY *= p.sin(addSine);
      p.vertex(vX, vY);
    }

    p.endShape();
  }

  p.setup = setup;
  p.draw = draw;
}
