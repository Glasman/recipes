import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

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
      </div>
    </div>
  );
}

export default App;