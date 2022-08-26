// depencencies
import { useState } from "react";
import useImage from "use-image";
import { Stage, Layer, Image, Text, Rect } from "react-konva";

import "./App.css";

function App() {
  const url =
    "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGVuc3xlbnwwfHwwfHw%3D&w=1000&q=80";
  const [image, status] = useImage(url, "anonymous");
  console.log(status);

  const [show, setShow] = useState(true)
  const onRectClick = () =>{
    setShow(!show)
  }
  const el = document.createElement("video");
  el.src = "assets/vd.mp4"
  console.log(el)

  return (
    <div className="App">
      <Stage width={window.innerWidth} height={600}>
        <Layer>
          <Image width={500} height={400} x={50} y={30} image={image} draggable />
        </Layer>
      </Stage>
{
    <Stage width={500} height={100}>
        <Layer>
          {
            show&&
        <Text text="Hello" fontSize={20} />
          }
          <Rect
          x={20}
          y={50}
          width={120}
          height={40}
          fill="#313edf"
          shadowBlur={10}
          cornerRadius={10}
          onClick={onRectClick}

        />
        </Layer>
      </Stage>}
      <Stage width={500} height={500}>
          <Layer>
            <Image
                  image={el}
                  x={20}
                  y={20}
                  stroke="red"
                  width={400}
                  height={300}
                />
          </Layer>
      </Stage>
          <video controls>
            <source src="assets/vd.mp4" type="video/mp4" />
          </video>
    </div>
  );
}

export default App;
