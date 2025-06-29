import { useGLTF } from '@react-three/drei';
import { useLoader } from '@react-three/fiber';
import { useEffect } from 'react';
import { Color, TextureLoader } from 'three';
import { useBodyColorStore, useMetalColor, useMaterial } from '@/stores/settingsBag';

export default function Model() {
    const { scene } = useGLTF('/backpack.glb');
    const activeColor = useBodyColorStore((state) => state.activeColor);
    const activeMetal = useMetalColor((state) => state.activeMetal);
    const activeMaterial = useMaterial((state) => state.activeMaterial);

    const leatherMap = useLoader(TextureLoader, '/leather_baseColor.jpg');
    const fabricMap = useLoader(TextureLoader, '/fabric_baseColor.jpg');
    const denimMap = useLoader(TextureLoader, '/denim_baseColor.jpg');

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
            case 'Silver': metalHex = '#ffffff'; break;
            case 'Gold': metalHex = '#FFD700'; break;
            case 'Black': metalHex = '#2d2d2d'; break;
            default: metalHex = '#C0C0C0';
        }

        let materialMap;
        switch (activeMaterial) {
            case 'Leather': materialMap = leatherMap; break;
            case 'Fabric': materialMap = fabricMap; break;
            case 'Denim': materialMap = denimMap; break;
            default: materialMap = leatherMap;
        }

        const bodyMeshes = ['Mesh', 'Mesh_2'];
        bodyMeshes.forEach((name) => {
            const mesh = scene.getObjectByName(name);
            if (mesh && mesh.material) {
                mesh.material.map = materialMap;
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
    }, [activeColor, activeMetal, activeMaterial, leatherMap, fabricMap, denimMap, scene]);

    return <primitive object={scene} position={[0, -0.2, 0]} />;
}
