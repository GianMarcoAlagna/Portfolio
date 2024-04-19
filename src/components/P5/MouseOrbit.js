export default function MouseOrbit(p) {
  let x = 0;
  let y = 0;
  let easing = 0.05;
  let radius = 100;
  let angle = 0;

  p.setup = () => {
    p.createCanvas(600, 600);
    p.noStroke();
  };

  p.draw = () => {
    p.background(255);
    let targetX = p.mouseX;
    let dx = targetX - x;
    x += dx;

    let targetY = p.mouseY;
    let dy = targetY - y;
    y += dy;

    p.fill(0);
    p.ellipse(x, y, 30, 30);

    p.translate(p.width / 2, p.height / 2);
    p.fill(175);
    angle += 0.1;
  };
}
