import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";
import Picture from "./Picture";
export default function Dictionary(props) {
  let [keyWord, setKeyWord] = useState(props.defaultKeyword);
  let [results, setResults] = useState("");
  let [loaded, setLoaded] = useState(false);
  let [picture, setPicture] = useState("");

  function search() {
    let apiKey = "adf0eeed55ed6d4256b9b3ft0e49cc9o";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyWord}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyWord}`;
    axios
      .get(pexelsApiUrl, {
        headers:
          "Authorization: 4zccKoPsxwCNvsPUjw5lYWMKeDc0ORVcEpbxz3DYfz7tH4h19dr7f6v4",
      })
      .then(handlePexelsResponse);
  }
  function load() {
    setLoaded(true);
    search();
  }

  function handleResponse(response) {
    setResults(response.data);
  }
  function handlePexelsResponse(response) {
    setPicture(response.data);
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
        <section>
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              placeholder="Search for a word..."
              onChange={handleKeyWord}
              id="search-box"
            />
            <input type="submit" value="🔍" id="search-button" />
          </form>

          <div className="hint">
            i.e:
            <em>"Sunset, yoga, table..."</em>
          </div>
        </section>

        <Results results={results} />

        <section>
          <Picture picture={picture} />
        </section>
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}
