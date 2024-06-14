import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";
export default function Dictionary(props) {
  let [keyWord, setKeyWord] = useState(props.defaultKeyword);
  let [results, setResults] = useState("");
  let [loaded, setLoaded] = useState(false);

  function search() {
    let apiKey = "adf0eeed55ed6d4256b9b3ft0e49cc9o";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyWord}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }
  function load() {
    setLoaded(true);
    search();
  }

  function handleResponse(response) {
    setResults(response.data);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeyWord(event) {
    setKeyWord(event.target.value);
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Type a word..."
            onChange={handleKeyWord}
          />
        </form>
        <Results results={results} />
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}
