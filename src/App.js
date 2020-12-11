import React from "react";
import "./styles.css";
import ParentComponent from "./components/ParentComponent";

export default function App() {
  return (
    <div className="App">
      <p>
        Demonstrates <code>useState()</code> hook and deep value update in state
      </p>

      <ParentComponent />
    </div>
  );
}