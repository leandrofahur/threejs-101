import { useRef } from "react";

import { useFrame, extend, useThree } from "@react-three/fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

extend({ OrbitControls });

export default function Experience() {
  const cubeRef = useRef();
  const groupRef = useRef();

  // const three = useThree();
  const { camera, gl } = useThree();

  useFrame((_, delta) => {
    cubeRef.current.rotation.y += delta;
    // groupRef.current.rotation.y += delta;
  });

  return (
    <>
      <orbitControls args={[camera, gl.domElement]} />

      <group ref={groupRef}>
        <mesh position-x={-2}>
          <sphereGeometry />
          <meshBasicMaterial wireframe={false} color="orange" />
        </mesh>
        <mesh
          rotation-y={Math.PI * 0.25}
          position-x={2}
          scale={1.5}
          ref={cubeRef}
        >
          {/* <sphereGeometry args={[1.5, 32, 32]} /> */}
          <boxGeometry scale={1.5} />
          <meshBasicMaterial wireframe={false} color="mediumpurple" />
        </mesh>
      </group>
      <mesh
        position-x={0}
        position-y={-1}
        rotation-x={-Math.PI * 0.5}
        scale={10}
      >
        <planeGeometry />
        <meshBasicMaterial color="greenyellow" />
      </mesh>
    </>
  );
}
