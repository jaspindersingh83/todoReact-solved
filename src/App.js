import logo from "./logo.svg";
import "./App.css";
import Todos from "./components/Todos";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
      <Todos />
      {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      {/* </header> */}
      <footer>
        <p>Made By: Jaspinder Singh</p>
      </footer>
    </div>
  );
}

export default App;
