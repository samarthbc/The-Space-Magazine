import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const SolarSystem = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    // Scene setup
    const scene = new THREE.Scene();
    
    // Camera setup
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 300; // Move the camera back to see the planets

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
    });
    renderer.setSize(window.innerWidth, window.innerHeight); // Set the renderer size to fill the window

    // Resize handler to maintain aspect ratio
    const handleResize = () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
    };
    window.addEventListener('resize', handleResize);

    // Create sun
    const sunGeometry = new THREE.SphereGeometry(10, 60, 60);
    const sunMaterial = new THREE.MeshBasicMaterial({ color: 0xffff00 });
    const sun = new THREE.Mesh(sunGeometry, sunMaterial);
    scene.add(sun);

    // Create planets
    const planets = [
      { name: 'Mercury', radius: 2, distance: 20, color: 0x808080 },
      { name: 'Venus', radius: 4, distance: 40, color: 0xffffff },
      { name: 'Earth', radius: 5, distance: 60, color: 0x0000ff },
      { name: 'Mars', radius: 3, distance: 80, color: 0xff0000 },
      { name: 'Jupiter', radius: 10, distance: 120, color: 0x9900ff },
      { name: 'Saturn', radius: 8, distance: 160, color: 0x00ffff },
      { name: 'Uranus', radius: 6, distance: 200, color: 0x00ff00 },
      { name: 'Neptune', radius: 5, distance: 240, color: 0x000080 },
    ];

    planets.forEach((planet) => {
      const planetGeometry = new THREE.SphereGeometry(planet.radius, 60, 60);
      const planetMaterial = new THREE.MeshBasicMaterial({ color: planet.color });
      const planetMesh = new THREE.Mesh(planetGeometry, planetMaterial);
      planetMesh.position.x = planet.distance;
      scene.add(planetMesh);
    });

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      sun.rotation.y += 0.01; // Sun rotation

      planets.forEach((planet, index) => {
        const planetMesh = scene.children[index + 1]; // Skip sun (index 0)
        planetMesh.rotation.y += 0.01; // Rotate the planets
        // Simulate simple orbit motion (this is not physically accurate but gives a dynamic effect)
        planetMesh.position.x = planet.distance * Math.cos(Date.now() * 0.001 + index);
        planetMesh.position.z = planet.distance * Math.sin(Date.now() * 0.001 + index);
      });

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      renderer.dispose();
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        width: '100%',
        height: '100vh',
        display: 'block',
      }}
    />
  );
};

export default SolarSystem;
