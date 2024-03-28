import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const handleInc = () => {
    setCount(count + 1);
  };

  return (
    <div className="App">
      <header className="App-header">
        <button>Button</button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <h1>{count}</h1>
      <button onClick={handleInc}>Inc</button>
    </div>
  );
}

export default App;
