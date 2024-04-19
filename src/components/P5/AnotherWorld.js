export default function AnotherWorld(p) {
  const height = p.windowHeight;
  const width = p.windowWidth;
  function setup() {
    p.createCanvas(width / 2, height);
  }

  const shapeSize = 100;
  const shapeRadius = shapeSize / 2;

  function draw() {
    p.background(220);
    p.translate(shapeRadius, shapeRadius);
    p.push();
    p.stroke(255);

    for (let j = -shapeSize; j < p.height; j += shapeSize * 0.85) {
      for (let i = -shapeSize; i <= p.width + 60; i += shapeSize * 0.75) {
        // This can probably be simplified into one variable but I'm too lazy to change it so...
        const mouseDistX = Math.abs(p.mouseX - i) - shapeSize;
        const mouseDistY = Math.abs(p.mouseY - j) - shapeSize;
        const mouseDist = mouseDistX + mouseDistY;

        p.push();
        let color = [50, 50 + mouseDist / 10, 168 + mouseDist / 10];
        p.fill(...color);
        p.translate(i, j); // Adjust the translation here
        shape(0, 0, 50, 3);
        p.pop();

        p.push();
        color = [50, 50 + mouseDist / 10, 250 + mouseDist / 10];
        p.fill(...color);
        p.translate(i - shapeRadius, j - shapeRadius * 0.85); // Adjust the translation here
        p.scale(-1, 1);
        shape(0, 0, 50, 3);
        p.pop();
      }
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
