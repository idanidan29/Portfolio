import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere } from "@react-three/drei";
import { pointsInner, pointsOuter } from "./ui/3D_particals";
import { Group } from "three";

const ParticleRing = () => {
    return (
        <div className="flex items-center justify-center absolute left top-140 md:top-100 w-full h-full">
            <Canvas
                camera={{
                    position: [10, -7.5, -5],
                }}
               
                className="bg-black-100 max-h-screen w-full"
            >
                <OrbitControls maxDistance={20} minDistance={10} />
                <directionalLight />
                <pointLight position={[-30, 0, -30]} power={10.0} />
                <PointCircle />
            </Canvas>

            
        </div>
    );
};

const PointCircle = () => {
    const ref = useRef<Group | null>(null);

    useFrame(({ clock }) => {
        if (ref.current?.rotation) {
            ref.current.rotation.z = clock.getElapsedTime() * 0.05;
        }
    });

    return (
        <group ref={ref}>
            {pointsInner.map((point) => (
                <Point key={point.idx} position={point.position} color={point.color} />
            ))}
            {pointsOuter.map((point) => (
                <Point key={point.idx} position={point.position} color={point.color} />
            ))}
        </group>
    );
};

const Point = ({ position, color }: { position: number[]; color: string }) => {
    return (
        // @ts-expect-error - Passing a num array as opposed to a Vector3 is acceptable
        // and the referenced method in the documentation
        <Sphere position={position} args={[0.1, 10, 10]}>
            <meshStandardMaterial
                emissive={color}
                emissiveIntensity={0.5}
                roughness={0.5}
                color={color}
            />
        </Sphere>
    );
};

export default ParticleRing;