export default function Grid_Wave(p, w, h) {
  function setup() {
    p.createCanvas(w, h);
  }

  let t = 0.01;
  const squareRadius = 75;
  const minSize = 0.8;
  let squares = [];
  for (let i = -squareRadius; i <= w; i += squareRadius) {
    for (let j = -squareRadius; j <= h; j += squareRadius) {
      squares.push({ i, j, scale: 1 });
    }
  }

  function draw() {
    p.background(225, 225, 240);
    p.fill(0);
    p.noFill();
    p.stroke(0);
    p.strokeWeight(2);

    for (let i = 0; i < squares.length; i++) {
      let s = squares[i];

      // add phase shift based on position
      let scaleFactor = 1 + minSize * p.sin(t + (s.i + s.j) / 50);

      p.push();
      p.translate(s.i + squareRadius / 2, s.j + squareRadius / 2); // move square to assigned position
      p.scale(scaleFactor);
      p.square(-squareRadius / 2, -squareRadius / 2, squareRadius / 2); // draw centered
      p.pop();
    }

    t += 0.02;
  }

  p.setup = setup;
  p.draw = draw;
}
