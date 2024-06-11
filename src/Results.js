import React from "react";
import Meaning from "./Meaning";
export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <h1>{props.results.data.word} </h1>
        <h2>{props.results.data.phonetic} </h2>
        {props.results.data.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
