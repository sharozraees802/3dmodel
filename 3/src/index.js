// Codrops article: https://tympanus.net/codrops/2019/10/14/how-to-create-an-interactive-3d-character-with-three-js/
// Originally by Kyle Wetton @KyleWetton
// Brought to React by https://github.com/RubLo
// https://spectrum.chat/react-three-fiber/general/skinned-mesh~de461f24-df23-43d0-8e08-dca7fe3b93f7

import ReactDOM from "react-dom"
import React, { Suspense, useRef } from "react"
import { Canvas } from "react-three-fiber"
import Stacy from "./Stacy"
import { getMousePos } from "./utils"
import "./styles.css"

function Plane({ ...props }) {
  return (
    <mesh {...props} receiveShadow>
      <planeBufferGeometry args={[500, 500, 1, 1]} />
      <shadowMaterial transparent opacity={0.2} />
    </mesh>
  )
}

function App() {
  const d = 8.25
  const mouse = useRef({ x: 0, y: 0 })
  return (
    <Canvas onMouseMove={(e) => (mouse.current = getMousePos(e))} shadowMap pixelRatio={[1, 1.5]} camera={{ position: [0, -3, 18] }}>
      <hemisphereLight skyColor={"black"} groundColor={0xffffff} intensity={0.5} position={[0, 50, 0]} />
      <directionalLight
        position={[-8, 20, 8]}
        shadow-camera-left={d * -1}
        shadow-camera-bottom={d * -1}
        shadow-camera-right={d}
        shadow-camera-top={d}
        shadow-camera-near={0.1}
        shadow-camera-far={1500}
        castShadow
      />
      <mesh position={[0, 0, -10]}>
        <circleBufferGeometry args={[8, 64]} />
        <meshBasicMaterial color="lightpink" />
      </mesh>
      <Plane rotation={[-0.5 * Math.PI, 0, 0]} position={[0, -10, 0]} />
      <Suspense fallback={null}>
        <Stacy mouse={mouse} position={[0, -10, 0]} scale={[0.08, 0.08, 0.08]} />
      </Suspense>
    </Canvas>
  )
}

ReactDOM.render(<App />, document.getElementById("root"))
