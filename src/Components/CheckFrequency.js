import React from "react";
import FrequencyTable from "./FrequencyTable";

export default function CheckFrequency(props) {
  let words = props.textValue.replace(/[.]/g, "").split(/\s/);
  let freqMap = {};

  words.forEach(function (w) {
    if (!freqMap[w]) {
      freqMap[w] = 0;
    }
    freqMap[w] += 1;
  });
  let freqMapArr = Object.entries(freqMap);

  return (
    <div className="container">
      <h2>Frequency Table</h2>
      <div className="container my-2">
        <table className="table table-hover">
          <tbody>
            <tr>
              <th>Word</th>
              <th>Frequency</th>
            </tr>
            {freqMapArr.map((value,id) => {
              return <FrequencyTable wordFreqPair={value} key={id}/>
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
