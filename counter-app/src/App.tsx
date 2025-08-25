import React, { useState } from "react";
import "./index.css";

function App() {
  // このstate一つで二つのカウントの値を管理できるようにしてください
  const [count1, count2, setCount1, setCount2] = useState(0);

  const handleClick1 = () => {
    setCount1(count + 1);
  };

  const handleClick2 = () => {
    setCount2(count + 1);
  };

  return (
    <div style={{}}>
      <h1>値1 : {count1}</h1>
      <button onClick={handleClick1}>+</button>

      <h1>値2 : {count2}</h1>
      <button onClick={handleClick2}>+</button>
    </div>
  );
}

export default App;
