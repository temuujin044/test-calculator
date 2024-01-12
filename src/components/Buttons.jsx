import React from "react";

export default function Buttons({ value, changeScreenVal }) {
  return (
    <button className="btn" onClick={() => changeScreenVal(value)}>
      {value}
    </button>
  );
}
