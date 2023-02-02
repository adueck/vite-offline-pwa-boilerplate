import { useState } from "react";
import "./App.css";
import bananas from "./Bananas.svg";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <div>
        <a href="#">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="#">
          <img src={bananas} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <h3>
          PWA Boilerplate
        </h3>
        <p>Cache all the things!!</p>
      </div>
    </div>
  )
}

export default App
