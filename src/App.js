import React from "react";
import "./App.css";
import HelloBug from "./components/HelloBug";
import HelloCorrect from "./components/HelloCorrect";

function App() {
  return (
    <div className="App">
      <HelloCorrect />
      <HelloBug />
    </div>
  );
}

export default App;
