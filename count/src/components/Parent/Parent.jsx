import React, { useState } from "react";
import Child from "../Child/Child";
import "./Parent.css";

const Parent = () => {

  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("Counter is at 0");
 
  const increment = () => {
    if (count < 20) {
      const newCount = count + 2;
      setCount(newCount);
      setMessage(`Count increased to ${newCount}`);
    }
  };

  const decrement = () => {
    if (count > 0) {
      const newCount = count - 2;
      setCount(newCount);
      setMessage(`Count decreased to ${newCount}`);
    }
  };

  const reset = () => {
    setCount(0);
    setMessage("Counter reset to 0");
  };

  return (
    <div className="parent">
      <button onClick={increment} disabled={count >= 20}>
        Increment
      </button>
      <button onClick={decrement} disabled={count <= 0}>
        Decrement
      </button>
      <button onClick={reset}>Reset</button>
      <Child count={count} message={message} />
    </div>
  );
};

export default Parent;
