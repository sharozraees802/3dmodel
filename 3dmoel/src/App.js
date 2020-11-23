import { GLTFModel, AmbientLight, DirectionLight } from "react-3d-viewer";
import "./resources/scene.gltf";
function App() {
  return (
    <div className="" style={{ width: 2500, height: 2500 }}>
      <GLTFModel width={500} height={500} src="./resources/scene.gltf">
        <AmbientLight color={0xffffff} />
        <DirectionLight
          color={0xffffff}
          position={{ x: 100, y: 200, z: 100 }}
        />
        <DirectionLight
          color={0xff00ff}
          position={{ x: -100, y: 200, z: -100 }}
        />
      </GLTFModel>
    </div>
  );
}

export default App;
