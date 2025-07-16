import { useState } from "react";

import "./App.css";

function App() {
  const [color, setColor] = useState("olive");
  const [text, setText] = useState("black");

  const handlecolor = () => {
    setColor("pink");
    setText("pink");
  };
  return (
    <>
      <div className="w-full h-screen" style={{ backgroundColor: color }}>
        <div className="flex justify-center  bg-white  rounded px-3 py-1   ">
          <h2 style={{ color: text }} className="text-center ">
            Chnage the color
          </h2>
        </div>

        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="fixed flex flex-wrap bg-white rounded-xl px-3 py-2 gap-3 shadow-lg">
            <button
              onClick={() => {
                setColor("red");
                setText("red");
              }}
              className="outline-none text-white rounded-full py-1 px-4 shadow-lg"
              style={{ backgroundColor: "red" }}
            >
              Red
            </button>

            <button
              onClick={() => {
                setColor("green");
                setText("green");
              }}
              className="outline-none text-white rounded-full py-1 px-4 shadow-lg"
              style={{ backgroundColor: "green" }}
            >
              Green
            </button>

            <button
              onClick={() => {
                setColor("blue");
                setText("blue");
              }}
              className="outline-none text-white rounded-full py-1 px-4 shadow-lg"
              style={{ backgroundColor: "blue" }}
            >
              Blue
            </button>

            <button
              onClick={handlecolor}
              className="outline-none text-white rounded-full py-1 px-4 shadow-lg"
              style={{ backgroundColor: "pink" }}
            >
              Pink
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
