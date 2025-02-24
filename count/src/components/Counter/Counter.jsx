import React from "react";
import "./Counter.css";

const GrandchildCounter = ({ count }) => {
  return (
    <div className="grandchild-counter">
      <p>Count: {count}</p>
      
    </div>
  );
};

export default GrandchildCounter;
