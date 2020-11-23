import { GLTFModel, AmbientLight, DirectionLight } from "react-3d-viewer";

function App() {
  return (
    <div className="App">
      <GLTFModel
        enableZoom={true}
        width={1000}
        height={1000}
        src="./resources/new.gltf"
      >
        <AmbientLight
          //  color={0xffffff}
          color={0x6a0dad}
        />
        <DirectionLight
          // color={0xff0000}
          color={0x6a0dad}
          // position={{ x: 10, y: 40, z: 50 }}
        />
      </GLTFModel>

      <h2>3dmodel</h2>
    </div>
  );
}

export default App;
