import React from "react";

export default function FrequencyTable(props) {
  return (
    <>
      {/* <tbody> */}
        <tr>
          <td>{props.wordFreqPair[0]}</td>
          <td>{props.wordFreqPair[1]}</td>
        </tr>
      {/* </tbody> */}
    </>
  );
}
