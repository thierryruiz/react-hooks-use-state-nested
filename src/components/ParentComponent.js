import React, { useState } from "react";
import ChildComponent from "./ChildComponent";

export default function ParentComponent() {
  const [count, setCount] = useState(0);

  return (
    <div className="ParentComponent">
      <button onClick={() => setCount(count + 1)}>+</button>
      <ChildComponent count={count} />
    </div>
  );
}
