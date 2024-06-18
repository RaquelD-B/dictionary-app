import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3> {props.meaning.partOfSpeech} </h3>
      <div>
        {" "}
        <strong>: </strong> {props.meaning.definition}{" "}
      </div>
      <em className="example">{props.meaning.example} </em>
      <div>
        {" "}
        <Synonyms synonyms={props.meaning.synonyms} />
      </div>
    </div>
  );
}
