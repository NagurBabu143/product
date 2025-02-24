import React from "react";

import Counter from "../Counter/Counter";
import "./Child.css";
import GrandchildMessage from "../GrandchildMessage/GrandchildMessage";

const Child = ({ count,message}) => {
  return (
    <div className="child">
      <GrandchildMessage message={message} />
      <Counter count={count} />
    </div>
  );
};

export default Child;
