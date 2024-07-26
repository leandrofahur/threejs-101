export default function CustomObject() {
  const verticesCount = 10 * 3;
  const postions = new Float32Array(verticesCount);

  return (
    <mesh>
      <boxGeometry />
      <meshBasicMaterial color="red" />
    </mesh>
  );
}
