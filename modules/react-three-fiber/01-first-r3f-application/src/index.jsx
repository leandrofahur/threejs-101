import ReactDOM from "react-dom/client";
import { Canvas } from "@react-three/fiber";

// custom:
import Experience from "./Experience";

import "./style.css";

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(
  <Canvas>
    <Experience />
  </Canvas>
);
