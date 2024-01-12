import { useState } from "react";
import React from "react";

import "./styles/global.css";
import "./styles/buttons.css";
import "./styles/mainCalc.css";
import { numButtons, operatorButtons, operButtons } from "./util/buttons";
import Buttons from "./components/Buttons";
import Screen from "./components/Screen";
import OpButtons from "./components/OpButtons";
import OperButtons from "./components/OperButton";

export default function Calculator() {
  const [currentScreen, setCurrentScreen] = useState("");
  const [prevScreen, setPrevScreen] = useState("");
  const [todoOp, setToDoOp] = useState("");
  const [anotherToDoOp, setAnotherToDoOp] = useState("");

  function changeTodoOp(val) {
    setToDoOp(val);
    setPrevScreen(currentScreen);
    setCurrentScreen("");
  }

  function changeAnoToDoOp(value) {
    setAnotherToDoOp(value);
    console.log("AC button clicked");
    if (anotherToDoOp == "AC") {
      console.log("AC button clicked2");
      // setPrevScreen("");
      // setToDoOp("");
      // setCurrentScreen(0);
      setCurrentScreen(0);
      // setAnotherToDoOp("");
    }
  }

  function egualHandler() {
    if (todoOp === "+") {
      const result = Number(prevScreen) + Number(currentScreen) + "";
      setCurrentScreen(result);
    }
    if (todoOp === "-") {
      const result = Number(prevScreen) - Number(currentScreen) + "";
      setCurrentScreen(result);
    }
    if (todoOp === "*") {
      const result = Number(prevScreen) * Number(currentScreen) + "";
      setCurrentScreen(result);
    }
    if (todoOp === "/") {
      const result = Number(prevScreen) / Number(currentScreen) + "";
      setCurrentScreen(result);
    }
  }

  function changeScreenVal(val) {
    setCurrentScreen(currentScreen + val);
  }

  return (
    <div className="mainCalc">
      <Screen value={currentScreen} />
      <div className="buttons">
        <div className="sec1">
          <div className="operButtons">
            {operButtons.map((val, index) => (
              <OperButtons
                key={index}
                value={val}
                changeAnoToDoOp={changeAnoToDoOp}
              />
            ))}
          </div>
          <div className="numberButtons">
            {numButtons.map((val, index) => (
              <Buttons
                key={index}
                value={val}
                changeScreenVal={changeScreenVal}
              />
            ))}
          </div>
        </div>
        <div className="sec2">
          <div className="operatorButtons">
            {operatorButtons.map((val, index) => (
              <OpButtons key={index} value={val} changeTodoOp={changeTodoOp} />
            ))}
          </div>
          <div className="btn" onClick={egualHandler}>
            <button>=</button>
          </div>
        </div>
      </div>
    </div>
  );
}
