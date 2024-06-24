import "./App.css";
import Dictionary from "./Dictionary";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Dictionary App</h1>{" "}
      </header>

      <Dictionary defaultKeyword="sunrise" />

      <footer>
        This project was coded by{" "}
        <a href="https://github.com/RaquelD-B" target="blank">
          Raquel Díaz
        </a>{" "}
        and is open-sourced on{" "}
        <a href="https://github.com/RaquelD-B/dictionary-app" target="blank">
          Github
        </a>
      </footer>
    </div>
  );
}

export default App;
