'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Suspense } from 'react';
import Model from "@/components/Model";

export default function ModelViewer() {
    return (
        <Canvas className="flex justify-content-center" style={{ height: 400 }} camera={{ position: [0, 0, 1], fov: 60 }}>
            <ambientLight intensity={3} />
            <directionalLight position={[10, 10, 10]} intensity={1} />

            <Suspense fallback={null}>
                <Model />
            </Suspense>

            <OrbitControls minDistance={1} maxDistance={2} enableZoom={true} />
        </Canvas>
    );
}
