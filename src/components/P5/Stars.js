function Stars(p, w, h) {
  // console.log("Stars initialized with size:", w, h);
  const respawnDelay = 60;
  // ==== STAR CLASS ====
  class Star {
    constructor(x, y, phase, speed, size) {
      this.x = x;
      this.y = y;
      this.phase = phase;
      this.speed = speed;
      this.light = 0;
      this.dead = false;
      this.respawnTimer = 0;
      this.size = size;
    }

    update() {
      if (this.dead) {
        this.respawnTimer--;
        if (this.respawnTimer <= 0) {
          this.reset();
        }
        return;
      }

      this.phase += this.speed;
      this.light = p.map(p.sin(this.phase), -1, 1, 0, 255);

      if (this.light <= 1) {
        this.dead = true;
        this.respawnTimer = respawnDelay + p.int(p.random(60));
      }
    }

    draw() {
      if (this.dead) return;

      p.push();
      p.noStroke();
      p.fill(255, 255, 255, this.light);
      p.circle(this.x, this.y, this.size);
      p.pop();
    }

    reset() {
      this.x = p.random(p.width);
      this.y = p.random(p.height);
      this.phase = p.random(p.TWO_PI);
      this.speed = p.random(0.005, 0.02);
      this.dead = false;
      this.light = 0;
      this.size = p.random(1, 1.5); // core star size
    }
  }

  // ==== PLANET CLASS ====
  class Planet {
    constructor(name, radius, color1, color2, landPatches) {
      this.name = name;
      this.radius = radius;
      this.color1 = color1;
      this.color2 = color2;
      this.x = 0;
      this.y = 0;
      this.landPatches = landPatches || []; // optional for non-Earth planets
    }
  }

  function drawRadialGradient(x, y, innerColor, outerColor, radius) {
    p.noStroke();
    for (let r = radius; r > 0; --r) {
      let inter = p.map(r, 0, radius, 0, 1);
      let c = p.lerpColor(innerColor, outerColor, inter);
      p.fill(c);
      p.circle(x, y, r * 2);
    }
  }

  function drawEarth(planet, x, y) {
    p.push();
    p.translate(x, y);

    // Base ocean gradient
    drawRadialGradient(
      0,
      0,
      p.color(planet.color1),
      p.color(planet.color2),
      planet.radius
    );

    // Draw land patches
    p.noStroke();
    p.fill(34, 139, 34, 230); // more visible land
    for (let patch of planet.landPatches) {
      p.ellipse(patch.x, patch.y, patch.w, patch.h);
    }

    // Simple highlight to simulate curvature
    p.fill(255, 255, 255, 50);
    p.ellipse(
      -planet.radius * 0.3,
      -planet.radius * 0.3,
      planet.radius * 0.8,
      planet.radius * 0.8
    );

    p.pop();
  }

  let stars = [];
  const maxStars = (w + h) >> 2;

  const earthRadius = 10;
  let Earth, Moon, Sun;

  function setup() {
    p.createCanvas(w, h);
    p.noStroke();

    // Precompute land patches for Earth here
    const earthLand = [];
    for (let i = 0; i < 20; i++) {
      earthLand.push({
        x: p.random(-earthRadius * 0.5, earthRadius * 0.5),
        y: p.random(-earthRadius * 0.5, earthRadius * 0.5),
        w: p.random(earthRadius * 0.2, earthRadius * 0.5),
        h: p.random(earthRadius * 0.1, earthRadius * 0.4),
      });
    }

    Earth = new Planet(
      "Earth",
      earthRadius,
      [70, 130, 180],
      [25, 25, 112],
      earthLand
    );
    Moon = new Planet("Moon", 7, 220, 70);
    Sun = new Planet("Sun", 7, [255, 247, 0], [255, 100, 0]);

    for (let i = 0; i < maxStars; i++) {
      stars.push(makeStar());
    }
  }

  function draw() {
    p.background(0);

    const mx = p.mouseX;
    const my = p.mouseY;

    // Spiral/orbit parameters
    let time = p.millis() * 0.001; // seconds for smooth animation

    // Each planet gets its own orbit distance + phase offset
    Moon.x = mx + p.cos(time + 0) * 30;
    Moon.y = my + p.sin(time + 0) * 30;

    Earth.x = mx + p.cos(time + 1) * 30;
    Earth.y = my + p.sin(time + 1) * 30;

    Sun.x = mx + p.cos(time + 2) * 30;
    Sun.y = my + p.sin(time + 2) * 30;

    // draw stars
    for (let star of stars) {
      star.update();
      star.draw();
    }

    // draw planets
    // drawRadialGradient(
    //   Sun.x,
    //   Sun.y,
    //   p.color(Sun.color1),
    //   p.color(Sun.color2),
    //   Sun.radius
    // );
    // drawRadialGradient(
    //   Moon.x,
    //   Moon.y,
    //   p.color(Moon.color1),
    //   p.color(Moon.color2),
    //   Moon.radius
    // );
    // drawEarth(Earth, Earth.x, Earth.y);
  }

  function makeStar() {
    return new Star(
      p.random(p.width),
      p.random(p.height),
      p.random(p.TWO_PI),
      p.random(0.005, 0.02),
      p.random(1, 1.5) // star core size
    );
  }

  p.setup = setup;
  p.draw = draw;
}

export default Stars;
