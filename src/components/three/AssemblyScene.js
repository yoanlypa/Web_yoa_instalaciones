"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

/*
  Escena 3D: un mueble que se monta solo a medida que el usuario hace scroll.
  - progressRef.current (0 → 1) llega desde el Hero según el scroll.
  - Las piezas empiezan "explotadas" (como en un plano de montaje) y vuelan a su sitio.
  - Al final se enciende la tira LED y aparecen los objetos decorativos.
*/

const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);
const easeInOut = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

// Generador pseudoaleatorio estable (misma "explosión" en cada visita)
function rng(seed) {
  let s = seed;
  return () => {
    s = (s * 16807) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

function woodTexture(base = "#b98552", grain = "#8a5a32") {
  const c = document.createElement("canvas");
  c.width = 512;
  c.height = 512;
  const g = c.getContext("2d");
  g.fillStyle = base;
  g.fillRect(0, 0, 512, 512);
  const r = rng(7);
  for (let i = 0; i < 90; i++) {
    const y = r() * 512;
    const amp = 2 + r() * 6;
    const freq = 0.004 + r() * 0.01;
    g.strokeStyle = grain;
    g.globalAlpha = 0.08 + r() * 0.18;
    g.lineWidth = 0.6 + r() * 2.2;
    g.beginPath();
    for (let x = 0; x <= 512; x += 8) {
      const yy = y + Math.sin(x * freq + i) * amp;
      if (x === 0) g.moveTo(x, yy);
      else g.lineTo(x, yy);
    }
    g.stroke();
  }
  g.globalAlpha = 1;
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  tex.anisotropy = 4;
  return tex;
}

export default function AssemblyScene({ progressRef, className = "" }) {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isSmall = window.matchMedia("(max-width: 768px)").matches;

    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "high-performance" });
    } catch {
      return; // Sin WebGL: el hero sigue funcionando con su fondo
    }
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, isSmall ? 1.5 : 1.75));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.05;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    mount.appendChild(renderer.domElement);
    renderer.domElement.style.width = "100%";
    renderer.domElement.style.height = "100%";
    renderer.domElement.style.display = "block";

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(32, 1, 0.1, 100);

    // Luces
    scene.add(new THREE.HemisphereLight("#fff4e6", "#2a2018", 0.9));
    const key = new THREE.DirectionalLight("#ffe2bf", 2.4);
    key.position.set(4, 6, 5);
    key.castShadow = true;
    key.shadow.mapSize.set(isSmall ? 1024 : 2048, isSmall ? 1024 : 2048);
    key.shadow.camera.left = -4;
    key.shadow.camera.right = 4;
    key.shadow.camera.top = 4;
    key.shadow.camera.bottom = -4;
    key.shadow.bias = -0.0005;
    scene.add(key);
    const rim = new THREE.DirectionalLight("#f59e0b", 1.4);
    rim.position.set(-5, 2, -4);
    scene.add(rim);
    const ledLight = new THREE.PointLight("#ffb347", 0, 4, 1.6);
    ledLight.position.set(0, 0.8, 0.45);
    scene.add(ledLight);

    // Materiales
    const woodTex = woodTexture();
    const wood = new THREE.MeshStandardMaterial({ map: woodTex, roughness: 0.62, metalness: 0.02 });
    const woodDark = new THREE.MeshStandardMaterial({ map: woodTexture("#7a5234", "#4e321d"), roughness: 0.7 });
    const metal = new THREE.MeshStandardMaterial({ color: "#d6d3d1", roughness: 0.3, metalness: 0.9 });
    const led = new THREE.MeshStandardMaterial({ color: "#ffd59a", emissive: "#ffb347", emissiveIntensity: 0 });

    const unit = new THREE.Group();
    scene.add(unit);

    // Medidas del mueble (estantería-aparador)
    const W = 2.6, H = 2.0, D = 0.55, T = 0.06;
    const parts = [
      { size: [T, H, D], pos: [-W / 2 + T / 2, 0, 0], mat: wood },          // lateral izq.
      { size: [T, H, D], pos: [W / 2 - T / 2, 0, 0], mat: wood },           // lateral dcho.
      { size: [W, T, D], pos: [0, -H / 2 + T / 2, 0], mat: wood },          // base
      { size: [W, T, D], pos: [0, H / 2 - T / 2, 0], mat: wood },           // techo
      { size: [W - 2 * T, H - 2 * T, 0.02], pos: [0, 0, -D / 2 + 0.01], mat: woodDark }, // trasera
      { size: [W - 2 * T, T, D - 0.04], pos: [0, -0.28, 0.01], mat: wood },  // balda 1
      { size: [W - 2 * T, T, D - 0.04], pos: [0, 0.34, 0.01], mat: wood },   // balda 2
      { size: [T, 0.62 - T, D - 0.04], pos: [0.42, -0.62, 0.01], mat: wood }, // divisor
      { size: [0.83, 0.56, 0.03], pos: [-0.86, -0.62, D / 2 - 0.015], mat: woodDark }, // puerta izq.
      { size: [0.83, 0.56, 0.03], pos: [-0.01, -0.62, D / 2 - 0.015], mat: woodDark }, // puerta centro
      { size: [W - 2 * T - 0.1, 0.025, 0.02], pos: [0, H / 2 - T - 0.03, D / 2 - 0.06], mat: led, isLed: true }, // tira LED
    ];

    const r = rng(42);
    const pieces = parts.map((p, i) => {
      const geo = new THREE.BoxGeometry(...p.size);
      const mesh = new THREE.Mesh(geo, p.mat);
      mesh.castShadow = !p.isLed;
      mesh.receiveShadow = true;
      const home = new THREE.Vector3(...p.pos);
      const dir = home.clone().add(new THREE.Vector3((r() - 0.5) * 1.2, (r() - 0.2) * 1.2, (r() - 0.3) * 1.6));
      if (dir.lengthSq() < 0.01) dir.set(r() - 0.5, 1, r() - 0.5);
      dir.normalize();
      const far = home.clone().add(dir.multiplyScalar(1.5 + r() * 1.1)).add(new THREE.Vector3(0.5, 0.5, 0));
      const fromQ = new THREE.Quaternion().setFromEuler(
        new THREE.Euler((r() - 0.5) * Math.PI, (r() - 0.5) * Math.PI * 1.4, (r() - 0.5) * Math.PI)
      );
      const start = 0.04 + (i / parts.length) * 0.52;
      unit.add(mesh);
      return { mesh, home, far, fromQ, start, dur: 0.34, isLed: !!p.isLed };
    });

    // Tiradores
    const handles = [-0.86, -0.01].map((x) => {
      const h = new THREE.Mesh(new THREE.CylinderGeometry(0.012, 0.012, 0.22, 12), metal);
      h.rotation.z = Math.PI / 2;
      h.position.set(x, -0.45, D / 2 + 0.02);
      h.castShadow = true;
      unit.add(h);
      return h;
    });

    // Tornillos que vuelan a las esquinas
    const screwGeo = new THREE.CylinderGeometry(0.018, 0.018, 0.07, 10);
    const screws = [];
    for (const sx of [-1, 1]) for (const sy of [-1, 1]) for (const sz of [-1, 1]) {
      const m = new THREE.Mesh(screwGeo, metal);
      const home = new THREE.Vector3(sx * (W / 2 - T / 2), sy * (H / 2 - T * 1.5), sz * (D / 2 - 0.08));
      const far = home.clone().multiplyScalar(2.4).add(new THREE.Vector3(0, 1.2, 0.8));
      m.rotation.z = Math.PI / 2;
      unit.add(m);
      screws.push({ mesh: m, home, far, start: 0.55 + r() * 0.12 });
    }

    // Decoración que aparece al final
    const deco = new THREE.Group();
    const potMat = new THREE.MeshStandardMaterial({ color: "#e7e5e4", roughness: 0.5 });
    const leafMat = new THREE.MeshStandardMaterial({ color: "#3f6b3a", roughness: 0.8 });
    const pot = new THREE.Mesh(new THREE.CylinderGeometry(0.11, 0.08, 0.2, 20), potMat);
    pot.position.set(0.85, 0.47, 0.02);
    const leaves = new THREE.Mesh(new THREE.IcosahedronGeometry(0.17, 1), leafMat);
    leaves.position.set(0.85, 0.66, 0.02);
    const bookColors = ["#a8501f", "#1c1917", "#d6b98c", "#57534e", "#b45309"];
    bookColors.forEach((c, i) => {
      const b = new THREE.Mesh(
        new THREE.BoxGeometry(0.06 + (i % 2) * 0.02, 0.26 + (i % 3) * 0.04, 0.3),
        new THREE.MeshStandardMaterial({ color: c, roughness: 0.75 })
      );
      b.position.set(-1.0 + i * 0.085, -0.25 + 0.03 + (0.26 + (i % 3) * 0.04) / 2, 0.02);
      b.castShadow = true;
      deco.add(b);
    });
    const vase = new THREE.Mesh(new THREE.SphereGeometry(0.12, 24, 16), new THREE.MeshStandardMaterial({ color: "#f59e0b", roughness: 0.25, metalness: 0.2 }));
    vase.position.set(-0.2, -0.13, 0.04);
    [pot, leaves, vase].forEach((m) => { m.castShadow = true; deco.add(m); });
    unit.add(deco);

    // Destornillador que gira alrededor durante el montaje
    const tool = new THREE.Group();
    const grip = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.07, 0.36, 16), new THREE.MeshStandardMaterial({ color: "#f59e0b", roughness: 0.4 }));
    const shaft = new THREE.Mesh(new THREE.CylinderGeometry(0.015, 0.015, 0.42, 10), metal);
    shaft.position.y = 0.38;
    tool.add(grip, shaft);
    tool.traverse((m) => { if (m.isMesh) m.castShadow = true; });
    scene.add(tool);

    // Suelo que recoge sombras + partículas de "polvo de taller"
    const floor = new THREE.Mesh(new THREE.CircleGeometry(4.5, 48), new THREE.ShadowMaterial({ opacity: 0.32 }));
    floor.rotation.x = -Math.PI / 2;
    floor.position.y = -H / 2 - 0.001;
    floor.receiveShadow = true;
    scene.add(floor);

    const dustCount = isSmall ? 90 : 180;
    const dustPos = new Float32Array(dustCount * 3);
    for (let i = 0; i < dustCount; i++) {
      dustPos[i * 3] = (r() - 0.5) * 9;
      dustPos[i * 3 + 1] = (r() - 0.3) * 5;
      dustPos[i * 3 + 2] = (r() - 0.5) * 6;
    }
    const dustGeo = new THREE.BufferGeometry();
    dustGeo.setAttribute("position", new THREE.BufferAttribute(dustPos, 3));
    const dust = new THREE.Points(dustGeo, new THREE.PointsMaterial({ color: "#fbbf24", size: 0.025, transparent: true, opacity: 0.55, depthWrite: false }));
    scene.add(dust);

    // Interacción: perspectiva que sigue al ratón
    const pointer = { x: 0, y: 0, tx: 0, ty: 0 };
    const onPointer = (e) => {
      pointer.tx = (e.clientX / window.innerWidth - 0.5) * 2;
      pointer.ty = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    if (!reduceMotion) window.addEventListener("pointermove", onPointer, { passive: true });

    // Tamaño
    const resize = () => {
      const w = mount.clientWidth || 1;
      const h = mount.clientHeight || 1;
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };
    const ro = new ResizeObserver(resize);
    ro.observe(mount);
    resize();

    // Solo animar cuando se ve
    let visible = true;
    const io = new IntersectionObserver(([e]) => { visible = e.isIntersecting; }, { threshold: 0 });
    io.observe(mount);

    let shown = reduceMotion ? 1 : 0;
    let raf = 0;
    const clock = new THREE.Clock();
    const tmpQ = new THREE.Quaternion();
    const idQ = new THREE.Quaternion();

    const frame = () => {
      raf = requestAnimationFrame(frame);
      if (!visible) return;
      const t = clock.getElapsedTime();
      const target = reduceMotion ? 1 : clamp(progressRef?.current ?? 0);
      shown += (target - shown) * 0.085; // suavizado
      const p = shown;

      pieces.forEach((pc) => {
        const k = easeOutCubic(clamp((p - pc.start) / pc.dur));
        pc.mesh.position.lerpVectors(pc.far, pc.home, k);
        tmpQ.copy(pc.fromQ).slerp(idQ, k);
        pc.mesh.quaternion.copy(tmpQ);
        const s = 0.6 + 0.4 * clamp(k * 3);
        pc.mesh.scale.setScalar(s);
      });
      const handlesK = easeOutCubic(clamp((p - 0.6) / 0.15));
      handles.forEach((h) => h.scale.setScalar(Math.max(0.001, handlesK)));
      screws.forEach((s) => {
        const k = easeInOut(clamp((p - s.start) / 0.22));
        s.mesh.position.lerpVectors(s.far, s.home, k);
        s.mesh.rotation.x = (1 - k) * 12;
        s.mesh.visible = k < 0.999;
      });

      const decoK = easeOutCubic(clamp((p - 0.8) / 0.18));
      deco.scale.setScalar(Math.max(0.001, decoK));
      deco.position.y = (1 - decoK) * 0.3;

      const ledK = clamp((p - 0.86) / 0.12);
      led.emissiveIntensity = ledK * 3.2;
      ledLight.intensity = ledK * 6;

      // Destornillador: orbita durante el montaje y se va al final
      const toolK = clamp((p - 0.85) / 0.15);
      const a = t * 0.9;
      tool.position.set(Math.cos(a) * 2.0, 0.4 + Math.sin(t * 1.3) * 0.25 + toolK * 4, Math.sin(a) * 1.2 + 0.6);
      tool.rotation.set(Math.sin(t) * 0.6, t * 1.4, 0.9 + Math.cos(t * 0.8) * 0.3);

      dust.rotation.y = t * 0.02;
      dust.position.y = Math.sin(t * 0.3) * 0.08;

      // Cámara: de vista "plano de montaje" en picado a vista frontal
      pointer.x += (pointer.tx - pointer.x) * 0.05;
      pointer.y += (pointer.ty - pointer.y) * 0.05;
      const aspect = camera.aspect;
      const radius = aspect < 0.8 ? 9.6 : aspect < 1.2 ? 8 : 6.6;
      const theta = THREE.MathUtils.lerp(0.95, 0.32, easeInOut(p)) + pointer.x * 0.22;
      const camY = THREE.MathUtils.lerp(2.6, 0.55, easeInOut(p)) - pointer.y * 0.35;
      camera.position.set(Math.sin(theta) * radius, camY, Math.cos(theta) * radius);
      camera.lookAt(0, 0.05 + (1 - p) * 0.35, 0);

      if (!reduceMotion) unit.rotation.y = Math.sin(t * 0.35) * 0.04;

      renderer.render(scene, camera);
    };
    frame();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onPointer);
      ro.disconnect();
      io.disconnect();
      scene.traverse((o) => {
        if (o.geometry) o.geometry.dispose();
        if (o.material) (Array.isArray(o.material) ? o.material : [o.material]).forEach((m) => { m.map?.dispose(); m.dispose(); });
      });
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, [progressRef]);

  return <div ref={mountRef} className={className} aria-hidden="true" />;
}
