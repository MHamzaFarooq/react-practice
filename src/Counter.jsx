import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div style={{ display: "flex", gap: "20px", height: "40px" }}>
      h2h23
      <button onClick={() => setCount((currValue) => currValue - 1)}>-</button>
      <h1>{count}</h1>
      <button onClick={() => setCount((currValue) => currValue + 1)}>+</button>
    </div>
  );
}

export default Counter;
