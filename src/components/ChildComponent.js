import React from "react";

export default function ChidComponent({ props }) {
  return (
    <div className="ChildComponent">
      <p>Value is</p>
      <p>{props}</p>
    </div>
  );
}
