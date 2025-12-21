import React, { useRef, useEffect } from "react";
import "./header.css";
import { motion as m } from "framer-motion";
import * as THREE from "three";

const Header = () => {
  const threeRef = useRef(null);

  useEffect(() => {
    const container = threeRef.current;
    if (!container) return;

    // --- Scene / Camera / Renderer ---
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 1000);
    camera.position.set(0, 0, 4.5);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true, // transparent background
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    container.appendChild(renderer.domElement);

    // --- Globe ---
    const textureLoader = new THREE.TextureLoader();
    const earthTexture = textureLoader.load("https://i.imgur.com/eCpD7bM.jpg");

    const geometry = new THREE.SphereGeometry(1, 64, 64);
    const material = new THREE.MeshPhongMaterial({ map: earthTexture });
    const earth = new THREE.Mesh(geometry, material);
    earth.position.set(0, 0, 0);
    scene.add(earth);

    // --- Realistic Time-based Lights (Earth from space) ---
    const now = new Date();
    const hour = now.getHours();
    const minutes = now.getMinutes();
    const timeOfDay = hour + minutes / 60;

    // Normalize to 0-1 (0 = midnight, 0.5 = noon)
    const dayProgress = (timeOfDay % 24) / 24;

    // Calculate sun position based on time of day
    // Sun rises at ~6am (0.25), sets at ~6pm (0.75)
    const sunAngle = dayProgress * Math.PI * 2; // Full rotation over 24 hours

    // Position light to simulate sun position in space
    // When dayProgress = 0.25 (6am): sun rises from east
    // When dayProgress = 0.5 (noon): sun is overhead
    // When dayProgress = 0.75 (6pm): sun sets in west
    const sunX = Math.cos(sunAngle - Math.PI / 2) * 8;
    const sunY = Math.sin(sunAngle - Math.PI / 2) * 8;
    const sunZ = 5;

    // Realistic sun intensity based on time of day
    let intensity;

    if (dayProgress < 0.2 || dayProgress > 0.8) {
      // Night: Very dim
      intensity = 0.1;
    } else if (dayProgress < 0.25) {
      // Dawn (5am-6am)
      intensity = 0.3 + (dayProgress - 0.2) * 1.2;
    } else if (dayProgress < 0.5) {
      // Morning to noon
      const morningProgress = (dayProgress - 0.25) / 0.25;
      intensity = 0.6 + morningProgress * 1.4;
    } else if (dayProgress < 0.75) {
      // Afternoon to evening
      const afternoonProgress = (dayProgress - 0.5) / 0.25;
      intensity = 2.0 - afternoonProgress * 0.8;
    } else if (dayProgress < 0.8) {
      // Dusk (6pm-8pm)
      intensity = 1.2 - (dayProgress - 0.75) * 2.4;
    }

    // White directional light simulating sun position
    const dirLight = new THREE.DirectionalLight(0xffffff, intensity * 2);
    dirLight.position.set(sunX, sunY, sunZ);
    dirLight.castShadow = true;
    scene.add(dirLight);

    // Add subtle ambient light for night side of Earth
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.2);
    scene.add(ambientLight);

    const resizeToContainer = () => {
      const width = container.clientWidth;
      const height = container.clientHeight;

      if (!width || !height) return;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();

      renderer.setSize(width, height, false);
    };

    // Use ResizeObserver so it stays correct on responsive changes
    const ro = new ResizeObserver(() => resizeToContainer());
    ro.observe(container);
    resizeToContainer();

    // --- Animation loop ---
    let rafId = 0;
    const animate = () => {
      rafId = requestAnimationFrame(animate);
      earth.rotation.y += 0.005;
      renderer.render(scene, camera);
    };
    animate();

    // --- Cleanup ---
    return () => {
      cancelAnimationFrame(rafId);
      ro.disconnect();

      geometry.dispose();
      material.dispose();
      earthTexture.dispose();

      renderer.dispose();
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <m.header
      id="header"
      className="header"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.25, duration: 0.5, ease: "easeOut" }}
      exit={{ opacity: 0 }}
    >
      {/* Three.js layer */}
      <div ref={threeRef} className="three-layer" />

      {/* Content layer */}
      <div className="header__container">
        <div className="h_name_container">
          <h1>hello, 你好, apa kabar!</h1>
        </div>
      </div>
    </m.header>
  );
};

export default Header;
