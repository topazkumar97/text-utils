import React from "react";

export default function Alert(props) {
  const capatilized = (word) => {
    let firstChar = word.charAt(0);
    firstChar = firstChar.toUpperCase();
    return firstChar + props.alertMsg.type.slice(1);
  };
  return (
    props.alertMsg && (
      <div
        className={`alert alert-${props.alertMsg.type} alert-dismissible fade show`}
        role="alert"
      >
        <strong>{props.alertMsg.type === "danger" ? "Erorr" : capatilized(props.alertMsg.type)} : </strong>
        {props.alertMsg.msg}
      </div>
    )
  );
}
