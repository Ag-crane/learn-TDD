import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [clicks, setClicks] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={(e) => setClicks((c) => Math.min(10, c + 1))}>
          click: {clicks}
        </button>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
