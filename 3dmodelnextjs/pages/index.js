// import Model from "../components/3dmodel";
import { GLTFModel, AmbientLight, DirectionLight } from "react-3d-viewer";

export default function Home() {
  return (
    <div>
      <h1>hello world</h1>
      {/* <Model /> */}
      <GLTFModel
        enableZoom={true}
        width={1000}
        height={1000}
        src="../resources/scene.gltf"
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
    </div>
  );
}
