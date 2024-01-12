import React from "react";

export default function OperButtons({ value, changeAnoToDoOp }) {
  return (
    <button
      className="btn"
      onClick={() => {
        changeAnoToDoOp(value);
        console.log(value, "AC");
      }}
    >
      {value}
    </button>
  );
}
