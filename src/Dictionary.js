import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyWord, setKeyWord] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    alert(`Searching for ${keyWord}`);
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
