import React, { useRef, useEffect, useCallback } from 'react';
import * as THREE from 'three';
import { useTheme } from '../../context/ThemeContext';

export const DigitifyHero3D: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { isDark } = useTheme();

  // Mouse tracking targets
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0, isHovering: false });
  const isDarkRef = useRef(isDark);
  isDarkRef.current = isDark;

  // Pointer event handlers
  const handlePointerMove = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const nx = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const ny = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
    mouseRef.current.targetX = THREE.MathUtils.clamp(nx, -1, 1);
    mouseRef.current.targetY = THREE.MathUtils.clamp(ny, -1, 1);
    mouseRef.current.isHovering = true;
  }, []);

  const handlePointerLeave = useCallback(() => {
    mouseRef.current.targetX = 0;
    mouseRef.current.targetY = 0;
    mouseRef.current.isHovering = false;
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    // ─────────────────────────────────────────────────────────────
    // 1. SCENE, CAMERA & RENDERER SETUP
    // ─────────────────────────────────────────────────────────────
    const width = container.clientWidth || 500;
    const height = container.clientHeight || 480;

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(36, width / height, 0.1, 100);
    camera.position.set(0, 0.05, 6.7);

    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true, // 100% transparent background, seamlessly blending with website background
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;

    // ─────────────────────────────────────────────────────────────
    // 2. STUDIO LIGHTING (Studio Key + Soft Fill + Signature Purple Accent)
    // ─────────────────────────────────────────────────────────────
    const ambientLight = new THREE.AmbientLight(0xffffff, isDarkRef.current ? 1.7 : 1.45);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xffffff, isDarkRef.current ? 2.3 : 2.6);
    keyLight.position.set(4, 5, 5);
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0xedf2f7, isDarkRef.current ? 1.1 : 1.3);
    fillLight.position.set(-4, 2, 3);
    scene.add(fillLight);

    const rimLight = new THREE.DirectionalLight(0xb498fc, isDarkRef.current ? 2.5 : 1.9);
    rimLight.position.set(0, -3, -4);
    scene.add(rimLight);

    // Signature Digitify Purple Accent Light
    const purpleLight = new THREE.PointLight(0x7928ca, 3.2, 10);
    purpleLight.position.set(0, 0.5, 2.2);
    scene.add(purpleLight);

    // ─────────────────────────────────────────────────────────────
    // 3. ROBOT CHARACTER (Modeled faithfully from the new reference)
    // ─────────────────────────────────────────────────────────────
    const robotRoot = new THREE.Group();
    robotRoot.position.set(0, -0.15, 0);
    scene.add(robotRoot);

    // Ceramic White Shell Material
    const robotBodyMat = new THREE.MeshStandardMaterial({
      color: 0xfcfdff,
      roughness: 0.16,
      metalness: 0.04,
    });

    const robotGreyMat = new THREE.MeshStandardMaterial({
      color: 0xd8d8de,
      roughness: 0.3,
      metalness: 0.08,
    });

    // ── HEAD ASSEMBLY (Rounded Monitor Helmet from Reference) ──
    const headGroup = new THREE.Group();
    headGroup.position.set(0, 0.5, 0);
    robotRoot.add(headGroup);

    // Head Shell: Rounded monitor-cuboid shape from reference with recessed screen opening
    const headGeo = new THREE.SphereGeometry(1.18, 48, 48);
    headGeo.scale(1.24, 1.0, 0.90);
    const headPos = headGeo.attributes.position;
    for (let i = 0; i < headPos.count; i++) {
      const z = headPos.getZ(i);
      // Flatten the front face where the screen sits, creating the helmet bezel
      if (z > 0.15) {
        headPos.setZ(i, 0.15 + (z - 0.15) * 0.52);
      }
    }
    headGeo.computeVertexNormals();

    const headMesh = new THREE.Mesh(headGeo, robotBodyMat);
    headMesh.renderOrder = 1;
    headGroup.add(headMesh);

    // Top Head Handle/Cap (Matching reference pill bump)
    const topCapGeo = new THREE.SphereGeometry(0.36, 24, 20);
    topCapGeo.scale(1.05, 0.36, 0.65);
    const topCap = new THREE.Mesh(topCapGeo, robotBodyMat);
    topCap.position.set(0, 1.02, -0.04);
    headGroup.add(topCap);

    // Side Rounded Ears (Matching reference)
    const earCylGeo = new THREE.CylinderGeometry(0.36, 0.36, 0.22, 32);
    earCylGeo.rotateZ(Math.PI / 2);

    const leftEar = new THREE.Mesh(earCylGeo, robotGreyMat);
    leftEar.position.set(-1.38, 0.08, -0.05);
    headGroup.add(leftEar);

    const rightEar = new THREE.Mesh(earCylGeo, robotGreyMat);
    rightEar.position.set(1.38, 0.08, -0.05);
    headGroup.add(rightEar);

    // Outer Ear Caps (Smooth white dome cap on ear)
    const earCapGeo = new THREE.SphereGeometry(0.36, 24, 24);
    earCapGeo.scale(0.35, 1.0, 1.0);

    const leftEarCap = new THREE.Mesh(earCapGeo, robotBodyMat);
    leftEarCap.position.set(-1.49, 0.08, -0.05);
    headGroup.add(leftEarCap);

    const rightEarCap = new THREE.Mesh(earCapGeo, robotBodyMat);
    rightEarCap.position.set(1.49, 0.08, -0.05);
    headGroup.add(rightEarCap);

    // ── DYNAMIC DIGITAL SCREEN / VISOR (High-Res 512x360 Canvas 2D) ──
    const faceCanvas = document.createElement('canvas');
    faceCanvas.width = 512;
    faceCanvas.height = 360;
    const fctx = faceCanvas.getContext('2d')!;

    // Helper: Rounded Rectangle with fallback
    const drawRoundedRect = (
      ctx: CanvasRenderingContext2D,
      x: number,
      y: number,
      w: number,
      h: number,
      r: number
    ) => {
      ctx.beginPath();
      ctx.moveTo(x + r, y);
      ctx.lineTo(x + w - r, y);
      ctx.quadraticCurveTo(x + w, y, x + w, y + r);
      ctx.lineTo(x + w, y + h - r);
      ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
      ctx.lineTo(x + r, y + h);
      ctx.quadraticCurveTo(x, y + h, x, y + h - r);
      ctx.lineTo(x, y + r);
      ctx.quadraticCurveTo(x, y, x + r, y);
      ctx.closePath();
    };

    // ── CONTINUOUS INTERPOLATED FACIAL PARAMETERS ──
    // Every variable smoothly glides with exponential easing — zero discrete jumps!
    let eyeGazeX = 0;
    let eyeGazeY = 0;
    let currEyeW = 46;
    let currEyeH = 78;
    let currCurveTop = 0;
    let currCurveBottom = 0;
    let currGlint = 0;
    let currMouthW = 0;
    let currMouthH = 0;
    let currMouthBottom = 0;
    let currMouthOpacity = 0;
    let currFaceGlow = 26;

    // Helper: Draw continuous parametric eye that organically morphs between:
    // capsule pill (idle) <-> curved downward arc (thinking) <-> wide open oval (realisation) <-> happy arch (excited)
    const drawContinuousEye = (
      ctx: CanvasRenderingContext2D,
      cx: number,
      cy: number,
      w: number,
      h: number,
      curveTop: number,
      curveBottom: number,
      glintOpacity: number
    ) => {
      const hw = Math.max(8, w / 2);
      const hh = Math.max(4, h / 2);

      const leftX = cx - hw;
      const rightX = cx + hw;
      const topY = cy - hh;
      const botY = cy + hh;

      const r = Math.min(hw, hh, 22);

      ctx.beginPath();
      // Start on top edge after left corner fillet
      ctx.moveTo(leftX + r, topY + curveTop * 0.85);

      // Top edge curving smoothly with curveTop
      ctx.bezierCurveTo(
        cx - hw * 0.22, topY + curveTop,
        cx + hw * 0.22, topY + curveTop,
        rightX - r, topY + curveTop * 0.85
      );

      // Top-right rounded cap/corner
      ctx.quadraticCurveTo(rightX, topY + curveTop * 0.85, rightX, topY + r + curveTop * 0.5);

      // Right vertical side down to bottom corner
      ctx.lineTo(rightX, botY - r + curveBottom * 0.5);

      // Bottom-right rounded cap/corner
      ctx.quadraticCurveTo(rightX, botY + curveBottom * 0.85, rightX - r, botY + curveBottom * 0.85);

      // Bottom edge curving smoothly with curveBottom
      ctx.bezierCurveTo(
        cx + hw * 0.22, botY + curveBottom,
        cx - hw * 0.22, botY + curveBottom,
        leftX + r, botY + curveBottom * 0.85
      );

      // Bottom-left rounded cap/corner
      ctx.quadraticCurveTo(leftX, botY + curveBottom * 0.85, leftX, botY - r + curveBottom * 0.5);

      // Left vertical side up to top corner
      ctx.lineTo(leftX, topY + r + curveTop * 0.5);

      // Top-left rounded cap/corner
      ctx.quadraticCurveTo(leftX, topY + curveTop * 0.85, leftX + r, topY + curveTop * 0.85);

      ctx.closePath();
      ctx.fill();

      // Realisation discovery sparkle glint dot
      if (glintOpacity > 0.03) {
        ctx.save();
        ctx.shadowBlur = 0;
        ctx.fillStyle = `rgba(255, 255, 255, ${Math.min(1, glintOpacity * 0.95)})`;
        ctx.beginPath();
        ctx.arc(cx - hw * 0.26, cy - hh * 0.28, Math.max(1, 6 * glintOpacity), 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    };

    // Helper: Draw continuous mouth that organically morphs:
    // closed (0) <-> surprised round circle 'o' <-> joyful cup smile '∪'
    const drawContinuousMouth = (
      ctx: CanvasRenderingContext2D,
      cx: number,
      cy: number,
      w: number,
      h: number,
      bottomDip: number,
      opacity: number
    ) => {
      if (opacity <= 0.02 || w <= 2 || h <= 2) return;

      ctx.save();
      ctx.globalAlpha = Math.min(1, opacity);
      ctx.fillStyle = '#d8b4fe';
      ctx.shadowColor = '#a855f7';
      ctx.shadowBlur = 24;

      const hw = w / 2;
      const hh = h / 2;
      const leftX = cx - hw;
      const rightX = cx + hw;
      const topY = cy - hh;
      const botY = cy + hh + bottomDip;
      const r = Math.min(hw * 0.35, hh, 8);

      ctx.beginPath();
      // Top flat edge with gentle corner fillets
      ctx.moveTo(leftX + r, topY);
      ctx.lineTo(rightX - r, topY);
      ctx.quadraticCurveTo(rightX, topY, rightX, topY + r);

      // Bottom curved cup scooping down from right to left
      ctx.bezierCurveTo(
        rightX, botY,
        leftX, botY,
        leftX, topY + r
      );
      ctx.quadraticCurveTo(leftX, topY, leftX + r, topY);

      ctx.closePath();
      ctx.fill();
      ctx.restore();
    };

    const renderFace = () => {
      fctx.clearRect(0, 0, 512, 360);

      // 1. Visor Glass Background (Deep glossy violet-black from reference)
      const grad = fctx.createRadialGradient(256, 175, 20, 256, 175, 230);
      grad.addColorStop(0, '#381362'); // Rich glowing violet core
      grad.addColorStop(0.38, '#200a3a');
      grad.addColorStop(0.72, '#0e041c');
      grad.addColorStop(1, '#05010a'); // Deep dark rim

      fctx.fillStyle = grad;
      drawRoundedRect(fctx, 20, 18, 472, 324, 76);
      fctx.fill();

      // Outer bezel dark rim
      fctx.strokeStyle = '#0a0314';
      fctx.lineWidth = 8;
      drawRoundedRect(fctx, 20, 18, 472, 324, 76);
      fctx.stroke();

      // Inner subtle glass rim highlight
      fctx.strokeStyle = 'rgba(255, 255, 255, 0.18)';
      fctx.lineWidth = 3;
      drawRoundedRect(fctx, 24, 22, 464, 316, 72);
      fctx.stroke();

      // Top Glass Specular Reflection Sheen
      fctx.fillStyle = 'rgba(255, 255, 255, 0.08)';
      fctx.beginPath();
      fctx.ellipse(256, 48, 170, 18, 0, 0, Math.PI * 2);
      fctx.fill();

      // 2. Eyes Configuration (Smooth gaze tracking)
      const leftEyeX = 182 + eyeGazeX * 26;
      const rightEyeX = 330 + eyeGazeX * 26;
      const eyeY = 168 + eyeGazeY * 18;

      // Glow Settings for Digitify Purple Face
      fctx.shadowColor = '#a855f7';
      fctx.shadowBlur = currFaceGlow;
      fctx.fillStyle = '#c084fc';

      // Draw both eyes using the continuous parametric engine — ZERO discrete branches!
      drawContinuousEye(
        fctx,
        leftEyeX,
        eyeY,
        currEyeW,
        currEyeH,
        currCurveTop,
        currCurveBottom,
        currGlint
      );

      drawContinuousEye(
        fctx,
        rightEyeX,
        eyeY,
        currEyeW,
        currEyeH,
        currCurveTop,
        currCurveBottom,
        currGlint
      );

      // 3. Cute Mouth (Continuously interpolated: closed <-> surprised 'o' <-> happy smile ∪)
      drawContinuousMouth(
        fctx,
        256,
        230,
        currMouthW,
        currMouthH,
        currMouthBottom,
        currMouthOpacity
      );
    };
    renderFace();

    const faceTexture = new THREE.CanvasTexture(faceCanvas);
    faceTexture.minFilter = THREE.LinearFilter;
    faceTexture.generateMipmaps = false;

    // Visor Dynamic Canvas Surface (Clean rounded monitor screen)
    const faceMat = new THREE.MeshBasicMaterial({
      map: faceTexture,
      transparent: true,
      depthWrite: false,
      depthTest: true,
      side: THREE.DoubleSide,
    });

    const faceGeo = new THREE.PlaneGeometry(1.96, 1.18, 32, 16);
    const posAttr = faceGeo.attributes.position;
    for (let i = 0; i < posAttr.count; i++) {
      const vx = posAttr.getX(i);
      const vy = posAttr.getY(i);
      posAttr.setZ(i, -0.15 * (vx * vx) - 0.07 * (vy * vy));
    }
    faceGeo.computeVertexNormals();

    const faceMesh = new THREE.Mesh(faceGeo, faceMat);
    faceMesh.renderOrder = 10;
    faceMesh.position.set(0, 0.08, 0.638);
    headGroup.add(faceMesh);

    // ── NECK & TORSO (From new reference) ──
    const neckGeo = new THREE.CylinderGeometry(0.48, 0.48, 0.22, 32);
    const neckMesh = new THREE.Mesh(neckGeo, robotGreyMat);
    neckMesh.position.set(0, -0.22, 0);
    robotRoot.add(neckMesh);

    const bodyGroup = new THREE.Group();
    bodyGroup.position.set(0, -0.88, 0);
    robotRoot.add(bodyGroup);

    // Smooth floating pear/egg body from reference
    const bodyGeo = new THREE.SphereGeometry(0.84, 36, 36);
    bodyGeo.scale(0.96, 1.15, 0.88);
    const bodyMesh = new THREE.Mesh(bodyGeo, robotBodyMat);
    bodyGroup.add(bodyMesh);

    // Panel waist line groove
    const waistGrooveGeo = new THREE.TorusGeometry(0.78, 0.016, 12, 48);
    waistGrooveGeo.rotateX(Math.PI / 2);
    const waistGroove = new THREE.Mesh(waistGrooveGeo, robotGreyMat);
    waistGroove.position.set(0, -0.12, 0);
    bodyGroup.add(waistGroove);

    // ── FLOATING TEARDROP ARMS (From new reference) ──
    const armGeo = new THREE.SphereGeometry(0.25, 24, 24);
    armGeo.scale(0.85, 1.8, 0.95);

    // Left Arm (Viewer's left)
    const leftArm = new THREE.Mesh(armGeo, robotBodyMat);
    leftArm.position.set(-1.14, -0.92, 0.05);
    leftArm.rotation.z = -0.16;
    robotRoot.add(leftArm);

    // Right Arm (Viewer's right)
    const rightArm = new THREE.Mesh(armGeo, robotBodyMat);
    rightArm.position.set(1.14, -0.92, 0.05);
    rightArm.rotation.z = 0.16;
    robotRoot.add(rightArm);

    // ── SOFT REALISTIC FLOATING GROUND SHADOW (From new reference) ──
    const shadowCanvas = document.createElement('canvas');
    shadowCanvas.width = 256;
    shadowCanvas.height = 256;
    const sctx = shadowCanvas.getContext('2d')!;

    const drawShadow = () => {
      sctx.clearRect(0, 0, 256, 256);
      const isDocDark = document.documentElement.classList.contains('dark');
      const sgrad = sctx.createRadialGradient(128, 128, 5, 128, 128, 115);
      sgrad.addColorStop(0, isDocDark ? 'rgba(0, 0, 0, 0.65)' : 'rgba(0, 0, 0, 0.28)');
      sgrad.addColorStop(0.35, isDocDark ? 'rgba(0, 0, 0, 0.32)' : 'rgba(0, 0, 0, 0.12)');
      sgrad.addColorStop(0.7, isDocDark ? 'rgba(0, 0, 0, 0.10)' : 'rgba(0, 0, 0, 0.03)');
      sgrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
      sctx.fillStyle = sgrad;
      sctx.fillRect(0, 0, 256, 256);
    };
    drawShadow();

    const shadowTex = new THREE.CanvasTexture(shadowCanvas);
    const shadowMat = new THREE.MeshBasicMaterial({
      map: shadowTex,
      transparent: true,
      depthWrite: false,
    });
    const shadowMesh = new THREE.Mesh(new THREE.PlaneGeometry(2.3, 2.3), shadowMat);
    shadowMesh.rotation.x = -Math.PI / 2;
    shadowMesh.position.set(0, -2.15, 0);
    scene.add(shadowMesh);

    // ─────────────────────────────────────────────────────────────
    // 4. DIGITIFY LOGO (The ONLY graphic element appearing on reveal)
    // ─────────────────────────────────────────────────────────────
    const bannerCanvas = document.createElement('canvas');
    bannerCanvas.width = 1024;
    bannerCanvas.height = 256;
    const ctx = bannerCanvas.getContext('2d')!;

    const drawBanner = () => {
      ctx.clearRect(0, 0, bannerCanvas.width, bannerCanvas.height);
      ctx.font = 'bold 130px "Space Grotesk", -apple-system, sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';

      const isDocDark = document.documentElement.classList.contains('dark');
      const textColor = isDocDark ? '#ffffff' : '#09090b';
      ctx.fillStyle = textColor;
      ctx.fillText('digitify', bannerCanvas.width / 2 - 25, bannerCanvas.height / 2);

      // Signature Digitify Purple Dot
      ctx.fillStyle = '#7928CA';
      ctx.beginPath();
      ctx.arc(bannerCanvas.width / 2 + 225, bannerCanvas.height / 2 + 38, 17, 0, Math.PI * 2);
      ctx.fill();
    };
    drawBanner();

    if (document.fonts) {
      document.fonts.ready.then(() => {
        drawBanner();
        bannerTexture.needsUpdate = true;
      });
    }

    const bannerTexture = new THREE.CanvasTexture(bannerCanvas);
    bannerTexture.minFilter = THREE.LinearFilter;
    const bannerMat = new THREE.MeshBasicMaterial({
      map: bannerTexture,
      transparent: true,
      opacity: 0,
      depthWrite: false,
      depthTest: false,
      side: THREE.DoubleSide,
    });
    const bannerPlane = new THREE.Mesh(new THREE.PlaneGeometry(3.6, 0.9), bannerMat);
    bannerPlane.renderOrder = 999;
    bannerPlane.position.set(0, 1.85, -0.2);
    bannerPlane.scale.set(0.7, 0.7, 0.7);
    scene.add(bannerPlane);

    // Listen to theme changes on <html>
    const handleThemeChange = () => {
      drawBanner();
      bannerTexture.needsUpdate = true;
      drawShadow();
      shadowTex.needsUpdate = true;

      const isDocDark = document.documentElement.classList.contains('dark');
      ambientLight.intensity = isDocDark ? 1.7 : 1.45;
      keyLight.intensity = isDocDark ? 2.3 : 2.6;
      rimLight.intensity = isDocDark ? 2.5 : 1.9;
    };

    const themeObserver = new MutationObserver(handleThemeChange);
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    // ─────────────────────────────────────────────────────────────
    // 5. CINEMATIC CHARACTER-DRIVEN LOOP (~11.6s Duration)
    // ─────────────────────────────────────────────────────────────
    const LOOP_DURATION = 11.6;
    let animClock = new THREE.Clock();
    let reqId = 0;
    let isPaused = false;
    let overrideTime: number | null = null;

    if (typeof window !== 'undefined') {
      (window as any).__setRobotTime = (t: number | null) => {
        overrideTime = t;
      };
    }

    // ── CONTINUOUS INTERPOLATED POSE & VFX PARAMETERS ──
    let currHeadRotX = 0;
    let currHeadRotY = 0;
    let currHeadRotZ = 0;
    let currBounceY = 0;

    let currRightArmX = 1.14;
    let currRightArmY = -0.92;
    let currRightArmZ = 0.05;
    let currRightArmRotX = 0;
    let currRightArmRotY = 0;
    let currRightArmRotZ = 0.16;

    let currLeftArmX = -1.14;
    let currLeftArmY = -0.92;
    let currLeftArmZ = 0.05;
    let currLeftArmRotZ = -0.16;

    let currLogoOpacity = 0;
    let currLogoScale = 0.75;
    let currLogoX = 0.65;
    let currLogoY = 1.65;

    const animate = () => {
      reqId = requestAnimationFrame(animate);
      if (isPaused) return;

      const elapsedTime = overrideTime !== null ? overrideTime : animClock.getElapsedTime();
      const timeInLoop = elapsedTime % LOOP_DURATION;

      // ── Cursor Smooth Lerping ──
      const mouse = mouseRef.current;
      mouse.x += (mouse.targetX - mouse.x) * 0.055;
      mouse.y += (mouse.targetY - mouse.y) * 0.055;

      // Eye gaze tracks cursor
      eyeGazeX = mouse.x;
      eyeGazeY = -mouse.y;

      // ── Character Cinematic Storyboard Timeline (12.0s Loop) ──
      // Stage 1: IDLE (0.0s – 2.8s)
      // Stage 2: THINKING (2.8s – 5.6s)
      // Stage 3: REALISATION (5.6s – 7.4s)
      // Stage 4: DIGITIFY REVEAL (7.4s – 10.0s)
      // Stage 5: HOLD & LOOP (10.0s – 12.0s)

      let targetEyeW = 46;
      let targetEyeH = 78;
      let targetCurveTop = 0;
      let targetCurveBottom = 0;
      let targetGlint = 0;
      let targetMouthW = 0;
      let targetMouthH = 0;
      let targetMouthBottom = 0;
      let targetMouthOpacity = 0;
      let targetFaceGlow = 26;

      let targetHeadRotX = 0;
      let targetHeadRotY = 0;
      let targetHeadRotZ = 0;
      let targetBounceY = 0;

      let targetRightArmX = 1.14;
      let targetRightArmY = -0.92;
      let targetRightArmZ = 0.05;
      let targetRightArmRotX = 0;
      let targetRightArmRotY = 0;
      let targetRightArmRotZ = 0.16;

      let targetLeftArmX = -1.14;
      let targetLeftArmY = -0.92;
      let targetLeftArmZ = 0.05;
      let targetLeftArmRotZ = -0.16;

      let targetLogoOpacity = 0;
      let targetLogoScale = 0.75;
      let targetLogoX = 0.65;
      let targetLogoY = 1.65;

      if (timeInLoop < 2.8) {
        // ── 01. IDLE (0.0s – 2.8s) ──
        // Robot floating calmly with subtle natural movement.
        // Relaxed open capsule eyes with periodic smooth blink.
        targetEyeW = 46;
        targetEyeH = 78;
        targetCurveTop = 0;
        targetCurveBottom = 0;
        targetGlint = 0;
        targetMouthOpacity = 0;
        targetFaceGlow = 24;

        targetHeadRotX = 0;
        targetHeadRotY = 0;
        targetHeadRotZ = 0;
        targetBounceY = 0;

        targetRightArmX = 1.14;
        targetRightArmY = -0.92;
        targetRightArmZ = 0.05;
        targetRightArmRotX = 0;
        targetRightArmRotY = 0;
        targetRightArmRotZ = 0.16;

        // Natural eyelid blink at 1.8s - 2.1s
        if (timeInLoop > 1.8 && timeInLoop < 2.15) {
          const blinkProgress = Math.sin(((timeInLoop - 1.8) / 0.35) * Math.PI);
          targetEyeH = THREE.MathUtils.lerp(78, 6, blinkProgress);
        }
      } else if (timeInLoop < 5.6) {
        // ── 02. THINKING (2.8s – 5.6s) ──
        // Robot lowers head, closes eyes into downward curves and thinks.
        // Hand raises up toward chin in contemplative pose!
        targetEyeW = 42;
        targetEyeH = 12;
        targetCurveTop = 18;
        targetCurveBottom = 18;
        targetGlint = 0;
        targetMouthOpacity = 0;
        targetFaceGlow = 22;

        targetHeadRotX = 0.22; // Gentle downward tilt
        targetHeadRotZ = 0.12; // Inquisitive side tilt
        targetHeadRotY = -0.06;
        targetBounceY = -0.05; // Reflective stillness

        // Hand to chin! (Frame 02 of reference storyboard)
        targetRightArmX = 0.68;
        targetRightArmY = -0.28;
        targetRightArmZ = 0.46;
        targetRightArmRotX = -0.38;
        targetRightArmRotY = 0.22;
        targetRightArmRotZ = 0.74;

        targetLeftArmRotZ = -0.10;
      } else if (timeInLoop < 7.4) {
        // ── 03. REALISATION (5.6s – 7.4s) ──
        // Robot suddenly remembers the idea! ("Wait... Digitify!")
        // Head perks upward with sudden discovery, eyes spring open into wide ovals with sparkle glint,
        // and a small surprised 'o' mouth opens! Hand drops back from chin.
        targetEyeW = 54;
        targetEyeH = 74;
        targetCurveTop = 0;
        targetCurveBottom = 0;
        targetGlint = 1.0;
        targetFaceGlow = 36; // Vibrant purple glow builds around face

        targetMouthW = 18;
        targetMouthH = 18;
        targetMouthBottom = 0;
        targetMouthOpacity = 1.0; // Small surprised 'o'

        targetHeadRotX = -0.14; // Looks up with sudden clarity
        targetHeadRotZ = -0.12; // Inquisitive tilt
        targetHeadRotY = 0.08;
        targetBounceY = 0.09; // Positive bounce!

        // Hand lowers down
        targetRightArmX = 1.10;
        targetRightArmY = -0.80;
        targetRightArmZ = 0.12;
        targetRightArmRotX = 0;
        targetRightArmRotY = 0;
        targetRightArmRotZ = 0.22;

        targetLeftArmRotZ = -0.20;
      } else if (timeInLoop < 10.0) {
        // ── 04. DIGITIFY REVEAL (7.4s – 10.0s) ──
        // Robot gets excited and the Digitify logo appears next to it!
        // Eyes blossom into happy arches (∩ ∩), mouth smoothly widens into happy smile (∪),
        // and right hand raises up in an excited wave pointing toward the logo!
        targetEyeW = 62;
        targetEyeH = 46;
        targetCurveTop = -12;
        targetCurveBottom = -36; // Scoops upward into happy arch!
        targetGlint = 0;
        targetFaceGlow = 30;

        targetMouthW = 56;
        targetMouthH = 26;
        targetMouthBottom = 12; // Joyful open smile cup
        targetMouthOpacity = 1.0;

        targetHeadRotX = -0.06;
        targetHeadRotZ = -0.04;
        targetHeadRotY = 0.05;
        targetBounceY = 0.04;

        // Excited waving hand toward logo (Frame 04 of reference storyboard)
        targetRightArmX = 1.26;
        targetRightArmY = -0.34;
        targetRightArmZ = 0.20;
        targetRightArmRotX = -0.16;
        targetRightArmRotY = 0.24;
        targetRightArmRotZ = 0.86;

        targetLeftArmRotZ = -0.22;

        // Digitify logo floats up and scales in beside head
        targetLogoOpacity = 1.0;
        targetLogoScale = 0.95;
        targetLogoX = 0.72;
        targetLogoY = 1.75;
      } else {
        // ── 05. HOLD & LOOP (10.0s – 12.0s) ──
        // Logo fades and robot returns to idle state seamlessly.
        // Hand smoothly lowers back down, eyes return to open capsules, mouth closes.
        targetLogoOpacity = 0.0;
        targetLogoScale = 0.80;
        targetLogoX = 0.68;
        targetLogoY = 1.68;

        targetEyeW = 46;
        targetEyeH = 78;
        targetCurveTop = 0;
        targetCurveBottom = 0;
        targetGlint = 0;
        targetMouthOpacity = 0;
        targetFaceGlow = 24;

        targetHeadRotX = 0;
        targetHeadRotY = 0;
        targetHeadRotZ = 0;
        targetBounceY = 0;

        targetRightArmX = 1.14;
        targetRightArmY = -0.92;
        targetRightArmZ = 0.05;
        targetRightArmRotX = 0;
        targetRightArmRotY = 0;
        targetRightArmRotZ = 0.16;

        targetLeftArmRotZ = -0.16;
      }

      // ── ORGANIC PIXAR-GRADE CONTINUOUS INTERPOLATION (EXPONENTIAL LERP) ──
      // Smoothly glides every single parameter — zero pop, zero snap, zero frame jump!
      currEyeW += (targetEyeW - currEyeW) * 0.07;
      currEyeH += (targetEyeH - currEyeH) * 0.07;
      currCurveTop += (targetCurveTop - currCurveTop) * 0.07;
      currCurveBottom += (targetCurveBottom - currCurveBottom) * 0.07;
      currGlint += (targetGlint - currGlint) * 0.08;
      currMouthW += (targetMouthW - currMouthW) * 0.07;
      currMouthH += (targetMouthH - currMouthH) * 0.07;
      currMouthBottom += (targetMouthBottom - currMouthBottom) * 0.07;
      currMouthOpacity += (targetMouthOpacity - currMouthOpacity) * 0.06;
      currFaceGlow += (targetFaceGlow - currFaceGlow) * 0.06;

      currHeadRotX += (targetHeadRotX - currHeadRotX) * 0.06;
      currHeadRotY += (targetHeadRotY - currHeadRotY) * 0.06;
      currHeadRotZ += (targetHeadRotZ - currHeadRotZ) * 0.06;
      currBounceY += (targetBounceY - currBounceY) * 0.06;

      currRightArmX += (targetRightArmX - currRightArmX) * 0.055;
      currRightArmY += (targetRightArmY - currRightArmY) * 0.055;
      currRightArmZ += (targetRightArmZ - currRightArmZ) * 0.055;
      currRightArmRotX += (targetRightArmRotX - currRightArmRotX) * 0.055;
      currRightArmRotY += (targetRightArmRotY - currRightArmRotY) * 0.055;
      currRightArmRotZ += (targetRightArmRotZ - currRightArmRotZ) * 0.055;

      currLeftArmX += (targetLeftArmX - currLeftArmX) * 0.055;
      currLeftArmY += (targetLeftArmY - currLeftArmY) * 0.055;
      currLeftArmZ += (targetLeftArmZ - currLeftArmZ) * 0.055;
      currLeftArmRotZ += (targetLeftArmRotZ - currLeftArmRotZ) * 0.055;

      currLogoOpacity += (targetLogoOpacity - currLogoOpacity) * 0.065;
      currLogoScale += (targetLogoScale - currLogoScale) * 0.065;
      currLogoX += (targetLogoX - currLogoX) * 0.065;
      currLogoY += (targetLogoY - currLogoY) * 0.065;

      // Re-render the face screen texture with continuously interpolated parameters
      renderFace();
      faceTexture.needsUpdate = true;

      // ── Animate Logo Appearance beside/behind Head ──
      bannerMat.opacity = currLogoOpacity;
      bannerPlane.scale.set(currLogoScale, currLogoScale, currLogoScale);
      bannerPlane.position.set(currLogoX, currLogoY, -0.15);
      bannerPlane.rotation.z = 0.05;

      // ── Natural Robot Floating & Breathing ──
      const hoverBob = Math.sin(elapsedTime * 2.0) * 0.085;
      const breathing = 1 + Math.sin(elapsedTime * 1.8) * 0.012;

      robotRoot.position.y = -0.15 + hoverBob + currBounceY;
      bodyGroup.scale.set(breathing, breathing, breathing);

      // Shadow opacity and scale reacts to hover altitude
      shadowMesh.scale.set(1 + hoverBob * 0.45, 1 + hoverBob * 0.45, 1);
      shadowMat.opacity = (isDarkRef.current ? 0.45 : 0.20) * (1 - hoverBob * 0.55);

      // ── Animate Both Arms Smoothly ──
      rightArm.position.set(currRightArmX, currRightArmY - hoverBob * 0.2, currRightArmZ);
      rightArm.rotation.set(currRightArmRotX, currRightArmRotY, currRightArmRotZ);

      leftArm.position.set(currLeftArmX, currLeftArmY - hoverBob * 0.25, currLeftArmZ);
      leftArm.rotation.z = currLeftArmRotZ;

      // ── Head Rotation: Storyboard Acting + Cursor Tracking ──
      const targetHeadRotYWithCursor = currHeadRotY + mouse.x * 0.38;
      const targetHeadRotXWithCursor = currHeadRotX - mouse.y * 0.22;
      const targetHeadRotZWithCursor = currHeadRotZ - mouse.x * 0.06;

      headGroup.rotation.y = THREE.MathUtils.lerp(headGroup.rotation.y, targetHeadRotYWithCursor, 0.065);
      headGroup.rotation.x = THREE.MathUtils.lerp(headGroup.rotation.x, targetHeadRotXWithCursor, 0.065);
      headGroup.rotation.z = THREE.MathUtils.lerp(headGroup.rotation.z, targetHeadRotZWithCursor, 0.065);

      // Torso secondary follow-through
      bodyGroup.rotation.y = THREE.MathUtils.lerp(bodyGroup.rotation.y, mouse.x * 0.15, 0.05);

      // Subtle Scene Parallax
      camera.position.x = THREE.MathUtils.lerp(camera.position.x, mouse.x * 0.25, 0.05);
      camera.position.y = THREE.MathUtils.lerp(camera.position.y, 0.05 + mouse.y * 0.16, 0.05);
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
    };

    reqId = requestAnimationFrame(animate);

    // ─────────────────────────────────────────────────────────────
    // 6. RESIZE OBSERVER & PERFORMANCE OPTIMIZATIONS
    // ─────────────────────────────────────────────────────────────
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width: newW, height: newH } = entry.contentRect;
        if (newW > 0 && newH > 0) {
          camera.aspect = newW / newH;
          camera.updateProjectionMatrix();
          renderer.setSize(newW, newH);
        }
      }
    });
    resizeObserver.observe(container);

    // Pause rendering when element is off-screen
    const intersectionObserver = new IntersectionObserver(
      (entries) => {
        isPaused = !entries[0].isIntersecting;
      },
      { threshold: 0.1 }
    );
    intersectionObserver.observe(container);

    // Pause rendering when tab is hidden
    const handleVisibilityChange = () => {
      isPaused = document.hidden;
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    // ─────────────────────────────────────────────────────────────
    // 7. CLEANUP
    // ─────────────────────────────────────────────────────────────
    return () => {
      cancelAnimationFrame(reqId);
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
      themeObserver.disconnect();
      document.removeEventListener('visibilitychange', handleVisibilityChange);

      scene.traverse((obj) => {
        if (obj instanceof THREE.Mesh) {
          obj.geometry?.dispose();
          if (Array.isArray(obj.material)) {
            obj.material.forEach((m) => m.dispose());
          } else {
            obj.material?.dispose();
          }
        }
      });
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className="relative w-full h-[360px] xs:h-[400px] sm:h-[440px] lg:h-[480px] xl:h-[500px] flex items-center justify-center select-none overflow-visible"
    >
      {/* Pure Transparent WebGL Canvas with zero card, frame, border, text, or extraneous UI */}
      <canvas
        ref={canvasRef}
        className="w-full h-full block cursor-grab active:cursor-grabbing touch-none"
      />
    </div>
  );
};

export default DigitifyHero3D;
