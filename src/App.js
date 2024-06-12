import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Dictionary App</h1>{" "}
      </header>
      <Dictionary />
      <footer>
        Coded by{" "}
        <a href="https://github.com/RaquelD-B" target="blank">
          Raquel Díaz
        </a>
      </footer>
    </div>
  );
}

export default App;
