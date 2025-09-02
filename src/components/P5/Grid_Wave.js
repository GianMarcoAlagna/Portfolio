export default function gridWave(p, w, h) {
  function setup() {
    p.createCanvas(w, h);
  }

  const squareRadius = 100;
  const influenceRadius = 300; // how far mouse influence reaches
  const minScale = 1.5; // max enlargement
  let squares = [];

  for (let i = -squareRadius; i <= w; i += squareRadius) {
    for (let j = -squareRadius; j <= h; j += squareRadius) {
      squares.push({ i, j });
    }
  }

  function draw() {
    p.background(10);
    p.stroke(230, 230, 255);
    p.strokeWeight(2);
    p.noFill();

    for (let s of squares) {
      // Distance from this square to mouse
      const dx = p.mouseX - (s.i + squareRadius / 2) + squareRadius / 2;
      const dy = p.mouseY - (s.j + squareRadius / 2) + squareRadius / 2;
      const dist = p.sqrt(dx * dx + dy * dy);

      // Map distance to scale factor
      let scaleFactor = p.map(
        dist,
        0,
        influenceRadius,
        minScale,
        1.9,
        true // constrain to range
      );

      p.push();
      p.translate(s.i + squareRadius / 2, s.j + squareRadius / 2);
      p.scale(scaleFactor);
      p.square(-squareRadius / 2, -squareRadius / 2, squareRadius / 2);
      p.pop();
    }
  }

  p.setup = setup;
  p.draw = draw;
}
