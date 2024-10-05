// PlanetSimulation.js
import React, { useEffect, useRef } from 'react';
import './Home.css'; // Optional: If you want to style the simulation

const PlanetSimulation = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        let animationFrameId;

        // Initial settings for the simulation
        const planet = {
            x: canvas.width / 2,
            y: canvas.height / 2,
            radius: 30,
            color: 'blue',
            orbitRadius: 100,
            angle: 0,
        };

        const drawPlanet = () => {
            context.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas

            // Calculate planet position in orbit
            planet.x = canvas.width / 2 + planet.orbitRadius * Math.cos(planet.angle);
            planet.y = canvas.height / 2 + planet.orbitRadius * Math.sin(planet.angle);

            // Draw the planet
            context.beginPath();
            context.arc(planet.x, planet.y, planet.radius, 0, Math.PI * 2, false);
            context.fillStyle = planet.color;
            context.fill();
            context.closePath();

            // Update the angle for next frame
            planet.angle += 0.01;

            animationFrameId = requestAnimationFrame(drawPlanet);
        };

        drawPlanet(); // Start the animation

        return () => {
            cancelAnimationFrame(animationFrameId); // Clean up on component unmount
        };
    }, []);

    return (
        <div className="simulation-container">
            <h2>Planet Simulation</h2>
            <canvas ref={canvasRef} width={400} height={400} className="simulation-canvas" />
        </div>
    );
};

export default PlanetSimulation;
