export default function Fabric(p) {
  function setup() {
    p.createCanvas(450, 500);
  }

  function draw() {
    p.background("rgb(0, 0, 0)");
    p.translate(0, 0);
    p.stroke("transparent");

    const radius = 20;
    const rot = -p.QUARTER_PI;
    let colorCount = 0;
    for (let x = 0.6 * radius; x < p.width; x += radius * 1.4) {
      for (let y = 0.6 * radius; y < p.height; y += radius * 1.4) {
        const mouseDistX = Math.abs(p.mouseX - x);
        const mouseDistY = Math.abs(p.mouseY - y);

        const mouseDist = mouseDistX + mouseDistY;

        let color = [50, 80 + mouseDist / 10, 168 + mouseDist / 5];
        p.fill(...color);

        p.push();
        p.scale(1 + mouseDist / 2000);
        polygon(x, y, radius, 4, rot);
        p.pop();
      }
      colorCount += 0.1;
    }
  }

  function polygon(x, y, r, sides, rot = 0) {
    p.beginShape();

    const inc = p.TWO_PI / sides;
    const last = p.TWO_PI - rot;
    for (let ang = rot; ang <= last; ang += inc) {
      const vX = x + p.cos(ang * 1.8) * r;
      const vY = y + p.sin(ang) * r;

      p.vertex(vX, vY);
    }
    p.endShape();
  }

  p.setup = setup;
  p.draw = draw;
}
