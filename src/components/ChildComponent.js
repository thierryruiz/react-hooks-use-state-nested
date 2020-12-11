import React from "react";

export default function ChidComponent({ count }) {
  return (
    <div className="ChildComponent">
      <p>Value is</p>
      <p>{count}</p>
    </div>
  );
}
