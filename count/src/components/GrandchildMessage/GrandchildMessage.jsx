import React from "react";
import "./GrandchildMessage.css";

const GrandchildMessage = ({ message }) => {
  return (
    <div className="grandchild-message">
      <p>{message}</p>
    </div>
  );
};

export default GrandchildMessage;
