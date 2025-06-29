import { useGLTF } from '@react-three/drei';

export default function Model() {
    const { scene } = useGLTF('/backpack.glb');
    return <primitive object={scene} />;
}