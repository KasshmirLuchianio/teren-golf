/**
 * Scenă 3D premium pentru hero (stil Spline): minge de golf procedurală,
 * inel auriu, blob-uri organice și nor de particule, cu parallax la mouse.
 * Fallback complet: pe mobil, la prefers-reduced-motion sau fără WebGL,
 * scena nu pornește și hero-ul rămâne pe compoziția foto statică.
 */
(function () {
  const mount = document.getElementById("hero-3d");
  if (!mount) return;

  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const isSmallScreen = window.matchMedia("(max-width: 820px)").matches;
  if (prefersReduced || isSmallScreen || typeof THREE === "undefined") {
    mount.classList.add("is-static");
    return;
  }

  let renderer;
  try {
    renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: "high-performance" });
  } catch (e) {
    mount.classList.add("is-static");
    return;
  }

  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(mount.clientWidth, mount.clientHeight);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  mount.appendChild(renderer.domElement);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(42, mount.clientWidth / mount.clientHeight, 0.1, 60);
  camera.position.set(0, 0, 9);

  // ---------- Lumini ----------
  scene.add(new THREE.AmbientLight(0xfff8ec, 0.55));

  const keyLight = new THREE.DirectionalLight(0xfff2d9, 1.35);
  keyLight.position.set(4, 6, 6);
  scene.add(keyLight);

  const goldLight = new THREE.PointLight(0xc9a227, 14, 30);
  goldLight.position.set(-5, -3, 4);
  scene.add(goldLight);

  const greenRim = new THREE.PointLight(0x2d6a4f, 10, 30);
  greenRim.position.set(5, -2, -4);
  scene.add(greenRim);

  const group = new THREE.Group();
  scene.add(group);

  // ---------- Minge de golf cu dimple-uri procedurale ----------
  function makeDimpleBump() {
    const size = 512;
    const c = document.createElement("canvas");
    c.width = c.height = size;
    const ctx = c.getContext("2d");
    ctx.fillStyle = "#808080";
    ctx.fillRect(0, 0, size, size);
    const step = 26;
    for (let row = 0; row * step * 0.87 < size + step; row++) {
      const y = row * step * 0.87;
      const offset = row % 2 ? step / 2 : 0;
      for (let x = -step; x < size + step; x += step) {
        const g = ctx.createRadialGradient(x + offset, y, 1, x + offset, y, step * 0.34);
        g.addColorStop(0, "#3c3c3c");
        g.addColorStop(0.75, "#6f6f6f");
        g.addColorStop(1, "#808080");
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(x + offset, y, step * 0.34, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    const tex = new THREE.CanvasTexture(c);
    tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
    tex.repeat.set(4, 2);
    return tex;
  }

  const ball = new THREE.Mesh(
    new THREE.SphereGeometry(1.5, 96, 96),
    new THREE.MeshStandardMaterial({
      color: 0xffffff,
      roughness: 0.24,
      metalness: 0.02,
      bumpMap: makeDimpleBump(),
      bumpScale: 1.4,
    })
  );
  group.add(ball);

  // ---------- Inel auriu orbital ----------
  const ring = new THREE.Mesh(
    new THREE.TorusGeometry(2.5, 0.045, 24, 160),
    new THREE.MeshStandardMaterial({ color: 0xd9b13b, metalness: 0.95, roughness: 0.22 })
  );
  ring.rotation.x = Math.PI / 2.35;
  ring.rotation.y = 0.35;
  group.add(ring);

  const ringSmall = new THREE.Mesh(
    new THREE.TorusGeometry(3.1, 0.02, 16, 160),
    new THREE.MeshStandardMaterial({ color: 0xc9a227, metalness: 0.9, roughness: 0.3, transparent: true, opacity: 0.55 })
  );
  ringSmall.rotation.x = Math.PI / 1.85;
  ringSmall.rotation.z = 0.5;
  group.add(ringSmall);

  // ---------- Blob-uri organice plutitoare ----------
  const blobs = [];
  const blobMat = new THREE.MeshStandardMaterial({
    color: 0x2d6a4f,
    roughness: 0.35,
    metalness: 0.15,
    flatShading: true,
    transparent: true,
    opacity: 0.85,
  });
  const blobGoldMat = new THREE.MeshStandardMaterial({
    color: 0xc9a227,
    roughness: 0.3,
    metalness: 0.75,
    flatShading: true,
  });
  [
    { r: 0.34, pos: [-3.1, 1.7, -1.2], mat: blobMat, speed: 0.7 },
    { r: 0.2, pos: [2.9, 2.2, -0.6], mat: blobGoldMat, speed: 1.1 },
    { r: 0.26, pos: [-2.5, -2.1, 0.6], mat: blobGoldMat, speed: 0.9 },
    { r: 0.42, pos: [3.2, -1.6, -1.6], mat: blobMat, speed: 0.55 },
  ].forEach((cfg) => {
    const m = new THREE.Mesh(new THREE.IcosahedronGeometry(cfg.r, 1), cfg.mat);
    m.position.set(cfg.pos[0], cfg.pos[1], cfg.pos[2]);
    m.userData = { base: cfg.pos.slice(), speed: cfg.speed, phase: Math.random() * Math.PI * 2 };
    group.add(m);
    blobs.push(m);
  });

  // ---------- Nor de particule ----------
  function makeSprite() {
    const s = 64;
    const c = document.createElement("canvas");
    c.width = c.height = s;
    const ctx = c.getContext("2d");
    const g = ctx.createRadialGradient(s / 2, s / 2, 0, s / 2, s / 2, s / 2);
    g.addColorStop(0, "rgba(255,248,230,1)");
    g.addColorStop(0.4, "rgba(255,240,200,0.45)");
    g.addColorStop(1, "rgba(255,240,200,0)");
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, s, s);
    return new THREE.CanvasTexture(c);
  }

  const COUNT = 420;
  const positions = new Float32Array(COUNT * 3);
  for (let i = 0; i < COUNT; i++) {
    const radius = 3.4 + Math.random() * 4.2;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
    positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta) * 0.75;
    positions[i * 3 + 2] = radius * Math.cos(phi) * 0.6 - 1;
  }
  const pGeo = new THREE.BufferGeometry();
  pGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  const particles = new THREE.Points(
    pGeo,
    new THREE.PointsMaterial({
      size: 0.09,
      map: makeSprite(),
      transparent: true,
      opacity: 0.8,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    })
  );
  scene.add(particles);

  // ---------- Interacțiune & animație ----------
  const target = { x: 0, y: 0 };
  window.addEventListener("pointermove", (e) => {
    target.x = (e.clientX / window.innerWidth - 0.5) * 2;
    target.y = (e.clientY / window.innerHeight - 0.5) * 2;
  });

  let visible = true;
  new IntersectionObserver((entries) => (visible = entries[0].isIntersecting), { threshold: 0 }).observe(mount);
  document.addEventListener("visibilitychange", () => (visible = !document.hidden && visible));

  const clock = new THREE.Clock();
  function tick() {
    requestAnimationFrame(tick);
    if (!visible) return;
    const t = clock.getElapsedTime();

    ball.rotation.y = t * 0.25;
    ball.rotation.x = Math.sin(t * 0.3) * 0.12;
    ball.position.y = Math.sin(t * 0.8) * 0.14;

    ring.rotation.z = t * 0.18;
    ringSmall.rotation.z = -t * 0.12;

    blobs.forEach((b) => {
      const { base, speed, phase } = b.userData;
      b.position.y = base[1] + Math.sin(t * speed + phase) * 0.28;
      b.position.x = base[0] + Math.cos(t * speed * 0.6 + phase) * 0.14;
      b.rotation.x += 0.003 * speed;
      b.rotation.y += 0.004 * speed;
    });

    particles.rotation.y = t * 0.03;

    // Parallax lin la mouse
    group.rotation.y += (target.x * 0.35 - group.rotation.y) * 0.04;
    group.rotation.x += (target.y * 0.22 - group.rotation.x) * 0.04;
    camera.position.x += (target.x * 0.4 - camera.position.x) * 0.03;
    camera.position.y += (-target.y * 0.3 - camera.position.y) * 0.03;
    camera.lookAt(0, 0, 0);

    renderer.render(scene, camera);
  }
  tick();

  window.addEventListener("resize", () => {
    const w = mount.clientWidth;
    const h = mount.clientHeight;
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    renderer.setSize(w, h);
  });
})();
