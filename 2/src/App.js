import React, { Suspense } from 'react'
import { Canvas, useLoader } from 'react-three-fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { OrbitControls, StandardEffects, draco } from 'drei'
import './styles.css'

const Keen = () => {
  const { nodes, materials } = useLoader(GLTFLoader, '/scene-draco.glb', draco())
  //const { nodes, materials } = useLoader(GLTFLoader, '/scene.gltf', draco())
  //   const { nodes, materials } = useLoader(
  //     GLTFLoader,
  //     'https://res.cloudinary.com/livanifyp/image/upload/v1608303945/scene-draco_vjibmy.glb',
  //     draco()
  //   )
  return (
    <group position={[0, -7, 0]} rotation={[-Math.PI / 2, 0, 0]} dispose={null}>
      <mesh material={materials['Scene_-_Root']} geometry={nodes.mesh_0.geometry} castShadow receiveShadow />
    </group>
  )
}

const App = () => {
  return (
    <Canvas shadowMap invalidateFrameloop camera={{ position: [0, 0, 17], far: 50 }}>
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
    </Canvas>
  )
}

export default App
