import React, { createContext } from "react";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@material-ui/icons/KeyboardArrowLeft";
import { useState } from "react";


export default function IncDec() {
  const [value, setValue] = useState(1);

  const leftBtn = () => {
    if (value > 0) {
      setValue(value - 1);
    } else if (value <= 0) {
      setValue(0);
      alert("Opps your value can't be in negative");
    }
  };

  const rightBtn = () => {
    setValue(value + 1);
  };

  return (
    <>
      <div className="incDec" style={{ float: "right", alignItems: "center" }}>
        <KeyboardArrowLeftIcon
          onClick={leftBtn}
          style={{ fontSize: "45px", cursor: "pointer" }}
        ></KeyboardArrowLeftIcon>
        <p style={{ display: "inline" }}>{value}</p>
        <KeyboardArrowRightIcon
          onClick={rightBtn}
          style={{ fontSize: "45px", cursor: "pointer" }}
        ></KeyboardArrowRightIcon>
      </div>
    </>
  );
}
