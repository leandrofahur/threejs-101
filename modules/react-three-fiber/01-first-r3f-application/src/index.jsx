import ReactDOM from "react-dom/client";
import { Canvas } from "@react-three/fiber";
import "./style.css";

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(
  <Canvas>
    <mesh>
      <torusKnotGeometry />
      <meshNormalMaterial />
    </mesh>
  </Canvas>
);
