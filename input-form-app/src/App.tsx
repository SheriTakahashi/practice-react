import { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  return (
    <div className="container">
      <div className="display">{input}</div>
      <input value={input} onInput={(e) => setInput(e.target.value)} />
    </div>
  );
}

export default App;
