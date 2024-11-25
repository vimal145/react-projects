import { useState } from "react";

function App() {
  let [color, setColor] = useState("olive");

  return (
    <div className="w-full h-screen " style={{ backgroundColor: color }}>
      <button
        onClick={() => {
          setColor("red");
        }}
        className="outline-none px-2 py-2 rounded-2xl text-white"
        style={{ backgroundColor: "black" }}
      >
        red
      </button>
      <button
        onClick={() => {
          setColor("green");
        }}
        className="outline-none px-2 py-2 rounded-2xl text-white"
        style={{ backgroundColor: "green" }}
      >
        green
      </button>
      <button
        onClick={() => {
          setColor("blue");
        }}
        className="outline-none px-2 py-2 rounded-2xl text-white"
        style={{ backgroundColor: "blue" }}
      >
        blue
      </button>
      <button
        onClick={() => {
          setColor("white");
        }}
        className="outline-none px-2 py-2 rounded-2xl text-black"
        style={{ backgroundColor: "white" }}
      >
        white
      </button>
      <button
        onClick={() => {
          setColor("pink");
        }}
        className="outline-none px-2 py-2 rounded-2xl text-black"
        style={{ backgroundColor: "pink" }}
      >
        pink
      </button>
    </div>
  );
}

export default App;
