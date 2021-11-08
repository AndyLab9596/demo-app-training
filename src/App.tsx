import React from "react";
import "./App.css";
import Counter from "./features/counter/Counter";

function App() {
  return (
    <div>
      <h3>Hello world</h3>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Counter />
      </div>
    </div>
  );
}

export default App;
