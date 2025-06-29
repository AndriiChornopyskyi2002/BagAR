import { useGLTF } from '@react-three/drei';
import { useEffect } from 'react';
import { useBodyColorStore, useMetalColor } from '@/stores/settingsBag';
import { Color } from 'three';

export default function Model() {
    const { scene } = useGLTF('/backpack.glb');
    const activeColor = useBodyColorStore((state) => state.activeColor);
    const activeMetal = useMetalColor((state) => state.activeMetal);

    useEffect(() => {
        let colorHex;
        switch (activeColor) {
            case 'Brown': colorHex = '#8B4512'; break;
            case 'Black': colorHex = '#2d2d2d'; break;
            case 'Blue': colorHex = '#004899'; break;
            default: colorHex = '#804000';
        }

        let metalHex;
        switch (activeMetal) {
            case 'Silver': metalHex = '#C0C0C0'; break;
            case 'Gold': metalHex = '#FFD700'; break;
            case 'Black': metalHex = '#2d2d2d'; break;
            default: metalHex = '#C0C0C0';
        }

        const bodyMeshes = ['Mesh', 'Mesh_2'];
        bodyMeshes.forEach((name) => {
            const mesh = scene.getObjectByName(name);
            if (mesh && mesh.material) {
                mesh.material.map = null;
                mesh.material.color = new Color(colorHex);
                mesh.material.needsUpdate = true;
            }
        });

        const metalMeshes = ['Mesh_1'];
        metalMeshes.forEach((name) => {
            const mesh = scene.getObjectByName(name);
            if (mesh && mesh.material) {
                mesh.material.map = null;
                mesh.material.color = new Color(metalHex);
                mesh.material.needsUpdate = true;
            }
        });
    }, [activeColor, activeMetal, scene]);

    return <primitive object={scene} />;
}