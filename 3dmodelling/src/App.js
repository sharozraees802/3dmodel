import { GLTFModel, AmbientLight, DirectionLight } from "react-3d-viewer";
// import Iframe from "react-iframe";

function App() {
  return (
    <div className="App">
      <GLTFModel
        enableZoom={true}
        width={1000}
        height={1000}
        src="./resources/scene.gltf"
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

      {/* <iframe
        src="https://sketchfab.com/3d-models/free-1972-datsun-240k-gt-b2303a552b444e5b8637fdf5169b41cb"
        title="Iframe Example"
        name="X-Frame-Options"
      ></iframe> */}
      <h1>3d model</h1>
    </div>
  );
}

export default App;
