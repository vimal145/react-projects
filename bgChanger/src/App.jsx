import { useState } from "react";
import Button from "./Button";

function App() {
  let [color, setColor] = useState("olive");

  return (
    <div className="w-full h-screen " style={{ backgroundColor: color }}>
      
    <Button btnColor="red" setColor={setColor} />
    <Button btnColor="green" setColor={setColor} />
    <Button btnColor="blue" setColor={setColor} />
    <Button btnColor="pink" setColor={setColor} />
    <Button btnColor="black" setColor={setColor} />
    </div>
  );
}

export default App;
