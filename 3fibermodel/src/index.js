// import React from "react";
// import ReactDOM from "react-dom";
// import "./index.css";
// import "./styles.css";
// import "./App.css";
// import App from "./App";
// import reportWebVitals from "./reportWebVitals";

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById("root")
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

import ReactDOM from "react-dom";
import React, { Suspense } from "react";
import { Canvas, useLoader } from "react-three-fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls, StandardEffects, draco } from "drei";
import "./styles.css";

function Keen() {
  const { nodes, materials } = useLoader(
    GLTFLoader,
    "/scene-draco.glb",
    draco()
  );
  return (
    <group position={[0, -7, 0]} rotation={[-Math.PI / 2, 0, 0]} dispose={null}>
      <mesh
        material={materials["Scene_-_Root"]}
        geometry={nodes.mesh_0.geometry}
        castShadow
        receiveShadow
      />
    </group>
  );
}

ReactDOM.render(
  <Canvas
    shadowMap
    invalidateFrameloop
    camera={{ position: [0, 0, 17], far: 50 }}
  >
    <ambientLight />
    <spotLight
      intensity={2}
      position={[20, 20, 20]}
      shadow-bias={-0.00005}
      angle={Math.PI / 6}
      shadow-mapSize-width={2048}
      shadow-mapSize-height={2048}
      castShadow
    />
    <Suspense fallback={null}>
      <Keen />
      <StandardEffects bloom={{ luminanceThreshold: 0.99 }} />
    </Suspense>
    <OrbitControls />
  </Canvas>,
  document.getElementById("root")
);
