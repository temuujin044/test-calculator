import React from "react";

export default function OpButtons({ value, changeTodoOp }) {
  return (
    <button className="btn" onClick={() => changeTodoOp(value)}>
      {value}
    </button>
  );
}
