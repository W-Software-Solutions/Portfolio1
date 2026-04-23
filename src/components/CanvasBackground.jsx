import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars, Float, PerspectiveCamera } from "@react-three/drei";
import * as THREE from "three";

function TechCore() {
    const coreRef = useRef();
    const innerRef = useRef();

    useFrame((state) => {
        if (!coreRef.current || !innerRef.current) return;
        const time = state.clock.getElapsedTime();

        // Slow elegant rotation
        coreRef.current.rotation.x = time * 0.1;
        coreRef.current.rotation.y = time * 0.15;

        // Counter rotation for inner core
        innerRef.current.rotation.x = time * -0.2;
        innerRef.current.rotation.y = time * -0.1;
    });

    return (
        <group position={[3, 0, -5]}>
            <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
                {/* Outer wireframe shell */}
                <mesh ref={coreRef} scale={2}>
                    <icosahedronGeometry args={[1, 1]} />
                    <meshStandardMaterial
                        color="#06b6d4"
                        wireframe={true}
                        transparent
                        opacity={0.3}
                    />
                </mesh>

                {/* Inner solid glowing core */}
                <mesh ref={innerRef} scale={1.2}>
                    <icosahedronGeometry args={[1, 0]} />
                    <meshStandardMaterial
                        color="#0891b2"
                        emissive="#00ADB5"
                        emissiveIntensity={0.8}
                        roughness={0.2}
                        metalness={0.9}
                        wireframe={true}
                    />
                </mesh>
            </Float>
        </group>
    );
}

function FloatingNodes() {
    const groupRef = useRef();

    useFrame((state) => {
        if (!groupRef.current) return;
        groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.05;
    });

    // Create an array of 20 nodes
    const nodes = Array.from({ length: 20 });

    return (
        <group ref={groupRef}>
            {nodes.map((_, i) => {
                // Random spherical positions spreading outwards
                const radius = 4 + Math.random() * 6;
                const theta = Math.random() * 2 * Math.PI;
                const phi = Math.acos((Math.random() * 2) - 1);

                const x = radius * Math.sin(phi) * Math.cos(theta);
                const y = radius * Math.sin(phi) * Math.sin(theta);
                const z = radius * Math.cos(phi);

                return (
                    <Float key={i} speed={1 + Math.random() * 2} floatIntensity={2} rotationIntensity={2}>
                        <mesh position={[x, y, z]} scale={0.1 + Math.random() * 0.15}>
                            <octahedronGeometry args={[1, 0]} />
                            <meshStandardMaterial
                                color={i % 2 === 0 ? "#22d3ee" : "#a855f7"}
                                emissive={i % 2 === 0 ? "#22d3ee" : "#a855f7"}
                                emissiveIntensity={0.5}
                                wireframe={false}
                            />
                        </mesh>
                    </Float>
                );
            })}
        </group>
    );
}

function Particles() {
    const pointsRef = useRef();

    useFrame((state) => {
        if (!pointsRef.current) return;
        pointsRef.current.rotation.y = state.clock.getElapsedTime() * 0.02;
        pointsRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.1) * 0.1;
    });

    return (
        <group ref={pointsRef}>
            <Stars radius={100} depth={50} count={4000} factor={4} saturation={1} fade speed={0.5} />
        </group>
    );
}

export default function CanvasBackground() {
    return (
        <div className="fixed inset-0 w-full h-full pointer-events-none -z-10 bg-[#020617]">
            <Canvas>
                <PerspectiveCamera makeDefault position={[0, 0, 5]} />
                <ambientLight intensity={0.3} />

                {/* Dynamic studio lighting */}
                <directionalLight position={[10, 10, 5]} intensity={2} color="#22d3ee" />
                <directionalLight position={[-10, -10, -5]} intensity={2} color="#a855f7" />
                <pointLight position={[0, 0, 0]} intensity={1} color="#ffffff" />

                <TechCore />
                <FloatingNodes />
                <Particles />

            </Canvas>
        </div>
    );
}
