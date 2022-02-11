import React, { useState } from "react";
import CheckFrequency from "./CheckFrequency";

export default function TextForm(props) {
  const [text, setText] = useState("");
  const [frequency, setfrequency] = useState(false);

  const handleUpClick = () => {
    setText(text.toUpperCase());
    if (text === "") {
      props.showAlert("Please Enter a text convert", "danger");
    } else {
      props.showAlert("Successfully Converted to Upper Case", "success");
    }
  };

  const handleLoClick = () => {
    setText(text.toLowerCase());
    if (text === "") {
      props.showAlert("Please Enter a text convert", "danger");
    } else {
      props.showAlert("Successfully Converted to Lower Case", "success");
    }
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const checkFrequency = () => {
    if (text === "") {
      props.showAlert("Please Enter a text to get Frequency Table", "danger");
    } else {
      setfrequency(true);
    }
  };

  const removeCheckFrequency = () => {
    if (text === "") {
      props.showAlert("Please Enter a text to get Frequency Table and then clear it.", "danger");
    } else {
      setfrequency(false);
    }
  };

  return (
    <>
      <div className="container">
        <div className="mb-3 mt-3">
          <label
            htmlFor="exampleFormControlTextarea1"
            className="form-label"
            style={{ color: props.mode === "dark" ? "white" : "black" }}
          >
            <h4>ENTER TEXT TO ANALYSE BELOW</h4>
          </label>
          <textarea
            className="form-control"
            id="myBox"
            rows={8}
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
          />
          <button onClick={handleUpClick} className="btn btn-primary my-2">
            Convert To UpperCase
          </button>
          <button onClick={handleLoClick} className="btn btn-primary my-2 mx-2">
            Convert To LowerCase
          </button>
          <button onClick={checkFrequency} className="btn btn-primary my-2">
            Get Frequency Table
          </button>
          <button
            onClick={removeCheckFrequency}
            className="btn btn-primary mx-2"
          >
            Clear Frequency Table
          </button>
        </div>
      </div>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2>Your Text Summary</h2>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} minutes to read</p>
      </div>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <div>{frequency ? <CheckFrequency textValue={text} /> : null}</div>
      </div>
    </>
  );
}
