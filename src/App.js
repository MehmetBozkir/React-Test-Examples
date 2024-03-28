import { useState } from "react";
import "./styles.css";

function App() {
  const [count, setCount] = useState(0);

  const handleInc = () => {
    setCount(count + 1);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="div1">
          <p className="div1">The existence of the button is being tested.</p>
          <button>Button</button>
        </div>
        <div className="div2">
          <p className="div2">Routing is being tested.</p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </div>
      </header>
      <div className="div3">
        <p className="div3">
          The clickability of the button at the user level and the functioning
          of the func mechanics are being tested.
        </p>
        <h1 className="div3">{count}</h1>
        <button onClick={handleInc}>Inc</button>
      </div>
    </div>
  );
}

export default App;
