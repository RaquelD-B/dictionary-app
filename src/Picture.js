import React from "react";
import "./Picture.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Picture(props) {
  console.log(props.picture);
  if (props.picture) {
    return (
      <div className="Picture">
        <div className="container">
          <div className="row">
            {props.picture.photos.map(function (photo, index) {
              return (
                <div className="col-sm-4">
                  <a
                    href={props.picture.photos[0].url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src={photo.src.landscape}
                      key={index}
                      className="img-fluid"
                      alt="key-word-pic"
                    />{" "}
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  } else return null;
}
