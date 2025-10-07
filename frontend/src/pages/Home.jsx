import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

// Helper function to generate a random number in a range
const randomRange = (min, max) => Math.random() * (max - min) + min;

const Home = ({ setPage }) => {
    const mountRef = useRef(null);

    useEffect(() => {
        if (!mountRef.current) return;

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(window.devicePixelRatio);
        mountRef.current.appendChild(renderer.domElement);
        camera.position.z = 15;

        // Main Globe
        const globeGeometry = new THREE.SphereGeometry(5, 64, 64);
        const globeMaterial = new THREE.MeshBasicMaterial({ color: 0xff8c00, wireframe: true });
        const globe = new THREE.Mesh(globeGeometry, globeMaterial);
        scene.add(globe);
        
        // Atmosphere
        const atmosphereGeometry = new THREE.SphereGeometry(5.2, 64, 64);
        const atmosphereMaterial = new THREE.MeshBasicMaterial({ color: 0xff8c00, transparent: true, opacity: 0.15 });
        const atmosphere = new THREE.Mesh(atmosphereGeometry, atmosphereMaterial);
        scene.add(atmosphere);

        // Starfield
        const starVertices = [];
        for (let i = 0; i < 15000; i++) {
            const x = (Math.random() - 0.5) * 200;
            const y = (Math.random() - 0.5) * 200;
            const z = (Math.random() - 0.5) * 200;
            if (Math.sqrt(x*x + y*y + z*z) > 10) starVertices.push(x, y, z);
        }
        const starGeometry = new THREE.BufferGeometry();
        starGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starVertices, 3));
        const starMaterial = new THREE.PointsMaterial({ color: 0xffffff, size: 0.05, transparent: true, opacity: 0.8 });
        const stars = new THREE.Points(starGeometry, starMaterial);
        scene.add(stars);

        // Orbiting Planets
        const createOrbitingPlanet = (size, color, distance, speed) => {
            const planet = new THREE.Mesh(new THREE.SphereGeometry(size, 32, 32), new THREE.MeshBasicMaterial({ color }));
            const pivot = new THREE.Object3D();
            pivot.add(planet);
            scene.add(pivot);
            planet.position.x = distance;
            pivot.rotation.set(randomRange(0, Math.PI * 2), randomRange(0, Math.PI * 2), randomRange(0, Math.PI * 2));
            return { pivot, speed };
        };

        const projectsPlanet = createOrbitingPlanet(0.5, 0x9370db, 7, 0.005);
        const contactPlanet = createOrbitingPlanet(0.4, 0x4169e1, 9, 0.003);
        
        const animate = () => {
            requestAnimationFrame(animate);
            globe.rotation.y += 0.0005;
            atmosphere.rotation.y += 0.0005;
            stars.rotation.y += 0.0002;
            projectsPlanet.pivot.rotation.y += projectsPlanet.speed;
            projectsPlanet.pivot.rotation.z += projectsPlanet.speed;
            contactPlanet.pivot.rotation.y += contactPlanet.speed;
            renderer.render(scene, camera);
        };
        animate();

        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            if (mountRef.current && renderer.domElement) {
                mountRef.current.removeChild(renderer.domElement);
            }
        };
    }, []);

    return (
        <div className="relative w-screen h-screen bg-black overflow-hidden font-sans">
            <div ref={mountRef} className="absolute top-0 left-0 w-full h-full z-0" />
            <div className="relative z-10 flex flex-col items-center justify-center w-full h-full text-white">
                <div className="text-center">
                    <h1 className="text-5xl md:text-7xl font-bold tracking-wider leading-tight">
                        Abdirsak Nor Osman
                    </h1>
                    <p className="text-lg md:text-xl text-bold text-gray-300 mt-2">
                        Senior Software Developer.
                    </p>
                    <button onClick={() => setPage('projects')} 
                    className="mt-8 px-8 py-3 border border-orange-400 text-black 
                    rounded-full bg-orange-400 
                     transition-colors duration-300 focus:outline-none focus:ring-2
                      focus:ring-orange-300 cursor-pointer">
                        Explore My Work
                    </button>
                </div>
            </div>
            <button onClick={() => setPage('projects')} className="absolute z-10 top-[25%] left-[15%] md:top-[30%] md:left-[20%] text-center cursor-pointer">
                <div className="px-5 py-2 bg-gray-800 bg-opacity-50 rounded-full backdrop-blur-sm shadow-lg hover:bg-opacity-75 transition-all">
                    <p className="text-white text-sm">Projects</p>
                </div>
            </button>
            <button onClick={() => setPage('contact')} className="absolute z-10 bottom-[25%] right-[15%] md:bottom-[30%] md:right-[20%] text-center cursor-pointer">
                <div className="px-5 py-2 bg-gray-800 bg-opacity-50 rounded-full backdrop-blur-sm shadow-lg hover:bg-opacity-75 transition-all">
                    <p className="text-white text-sm">Contact</p>
                </div>
            </button>
        </div>
    );
};

export default Home;