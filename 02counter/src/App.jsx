import { useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const addValue = () => {
    setCount(count + 1);
  };

  return (
    <>
      <h1>React course </h1>
      <h2>Counter Value:{count}</h2>
      <button onClick={addValue}>Add Value</button> {"  "}
      <button onClick={() => setCount(count - 1)}>Remove Value</button>
      <p>footer:{count}</p>
    </>
  );
}

export default App;
