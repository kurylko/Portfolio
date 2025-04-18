import React, {useEffect, useRef} from 'react';
import * as THREE from 'three';
import {gsap} from 'gsap';

const OvalAnimation = () => {
    const mountRef = useRef(null);
    const rendererRef = useRef(null);

    useEffect(() => {

    const scene = new THREE.Scene();

    const w = window.innerWidth;
    const h =  window.innerHeight;

    // const ambient = new THREE.AmbientLight(0xffffff);
    // scene.add(ambient);

    const renderer = new THREE.WebGLRenderer({antialias: true});
    renderer.setSize(w,h);
    document.body.appendChild(renderer.domElement);
    rendererRef.current = renderer;
    const fov = 75;
    const aspect = w/h;
    const near = 0.1;
    const far = 10;
    const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    camera.position.x = 2;
    camera.position.z = 5

    const geo = new THREE.IcosahedronGeometry(4,2);
    const mat = new THREE.MeshBasicMaterial({
        color: 0x00ccff,
    });
    const mesh = new THREE.Mesh(geo, mat);
    scene.add(mesh);

    renderer.render(scene, camera);

        gsap.to(mesh.rotation, { duration: 5, x: Math.PI * 2, repeat: -1, ease: "none" });


        const animate = () => {
            requestAnimationFrame(animate);
            renderer.render(scene, camera);
        };

        animate();

        const handleResize = () => {
            const width = mountRef.current.clientWidth;
            const height = mountRef.current.clientHeight;
            renderer.setSize(width, height);
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            if (mountRef.current && rendererRef.current) {
                const { domElement } = rendererRef.current;
                if (domElement.parentNode === mountRef.current) {
                    mountRef.current.removeChild(domElement); // Remove the canvas safely
                }
            }
        };
    }, []);

    return <div ref={mountRef} style={{ width: '100vw', height: '100vh' }} />;

};

export default OvalAnimation;
