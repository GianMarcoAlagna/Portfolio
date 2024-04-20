export default function Hive(p, parentRef, color_mode) {
  let height = parentRef.clientHeight || p.windowHeight;
  let width = parentRef.clientWidth || p.windowWidth;
  function setup() {
    p.createCanvas(width, height);
    window.addEventListener("resize", () => {
      height = parentRef.clientHeight || p.windowHeight;
      width = parentRef.clientWidth || p.windowWidth;
      p.resizeCanvas(width, height);
    });
  }

  const shapeSize = 100;
  const shapeRadius = shapeSize / 2;

  function draw() {
    p.background(220);
    p.push();
    p.stroke(255);

    let count = 0;
    for (let j = -shapeSize; j < height + shapeSize; j += shapeSize / 2.3) {
      for (let i = 0; i < width; i += shapeSize * 1.5) {
        // This can probably be simplified into one variable but I'm too lazy to change it so...
        const mouseDistX = Math.abs(p.mouseX - i) - shapeSize;
        const mouseDistY = Math.abs(p.mouseY - j) - shapeSize;
        const mouseDist = mouseDistX + mouseDistY;

        p.push();
        const color =
          color_mode === "dark"
            ? [168 + mouseDist / 10, 50 + mouseDist / 10, 50]
            : [50, 50 + mouseDist / 10, 168 + mouseDist / 10];
        p.fill(...color);

        shape(
          i + shapeSize * (count % 2 === 0) * 0.75,
          j + shapeSize,
          shapeRadius,
          6
        );
        p.pop();
      }
      count++;
    }

    p.pop();
    // noLoop();
  }

  function shape(x, y, rad, points) {
    p.beginShape();

    const numPoints = p.TWO_PI / points;
    for (let ang = -numPoints; ang < p.TWO_PI; ang += numPoints) {
      const vX = x + p.cos(ang) * rad;
      const vY = y + p.sin(ang) * rad;

      p.vertex(vX, vY);
    }

    p.endShape();
  }

  p.setup = setup;
  p.draw = draw;
}
