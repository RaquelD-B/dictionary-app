import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyWord, setKeyWord] = useState("");

  function handleResponse(response) {
    console.log(response);
  }

  function handleSubmit(event) {
    event.preventDefault();

    let apiKey = "adf0eeed55ed6d4256b9b3ft0e49cc9o";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyWord}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function searchKeyWord(event) {
    setKeyWord(event.target.value);
  }
  return (
    <div className="Dictionary">
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Type a word..."
          onChange={searchKeyWord}
        />
      </form>
    </div>
  );
}
