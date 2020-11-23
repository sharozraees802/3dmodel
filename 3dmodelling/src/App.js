import { GLTFModel, AmbientLight, DirectionLight } from "react-3d-viewer";

function App() {
  return (
    <div className="App">
      <GLTFModel
        enableZoom={true}
        width={1000}
        height={1000}
        src="./resources/scene.gltf"
      >
        <AmbientLight color={0xffffff} />
        <DirectionLight
          color={0xff0000}
          // position={{ x: 10, y: 40, z: 50 }}
        />
      </GLTFModel>
      <h2>3dmodel</h2>
    </div>
  );
}

export default App;
