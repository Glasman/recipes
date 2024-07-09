import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState();

const colorChange = () => {
  if (color === red) {
    setColor(blue)
  } else if ( color === blue ) {
    setColor(red)
  }
}

  return (
    <div className="App">
      <h1>Cool coding crash course</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button onClick={() => setCount(0)}> 
          Reset
        </button>
        <button onClick = {() => setCount((count) => count * 2)}>
          Multiply count by 2
        </button>
        <button onClick = {() => colorChange(color)}>
          Color swap
        </button>
      </div>
    </div>
  );
}

export default App;