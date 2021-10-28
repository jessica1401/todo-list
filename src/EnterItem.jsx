import React, { useState } from "react";
import { TextField } from "@material-ui/core";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import IncDec from "./IncDec";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";

export default function EnterItem() {
  const [arrayOfItems, setArrayOfItems] = useState([]);
  const [item, setItem] = useState("");
  const [cutLine, setCutLine] = useState("none");

  const changeItem = (event) => {
    setItem(event.target.value);
  };

  const addItem = (newItem) => {
    setArrayOfItems((oldVal) => {
      return [...oldVal, newItem];
    });

    setItem("");
  };

  const keyDown = (event) => {
    if (event.key === "Enter") {
      addItem(item);
    }
  };

  const deleteIcon = (li, i) => {
    const array = arrayOfItems;
    const newarray = array.filter((arr, ind) => {
      return ind !== i
    })
    setArrayOfItems(newarray)
  }

  return (
    <>
      <div className="addItems">
        <TextField
          autoComplete="off"
          onChange={changeItem}
          onKeyDown={keyDown}
          style={{
            background: "#b9d4b4",
            borderRadius: "30px",
            paddingBottom: "5px",
            width: "350px",
            overflow: "hidden",
            color: "yellow",
            height: "55px",
          }}
          className="input"
          id="standard-basic"
          label="Enter Your Item Here"
          value={item}
        />
        <button onClick={() => addItem(item)} className="deleteBtn">
          <AddCircleOutlineIcon
            style={{ fontSize: "50px" }}
          ></AddCircleOutlineIcon>
        </button>
      </div>
      <ol>
        {arrayOfItems.map((item, index) => {
          return (
            <div key={index} className="item">
              <DeleteForeverIcon
                onClick={() => deleteIcon(item, index)} 
                style={{ fontSize: "25px" }}
                className="deleteBtn"
              ></DeleteForeverIcon> {" "}
              <li
                title="Click to Cut it"
                className="list"
                style={{
                  display: "inline",
                  cursor: "pointer",
                  textDecoration: cutLine,
                }}
              >
                {item}
              </li>
              <IncDec></IncDec>
            </div>
          );
        })}
      </ol>
    </>
  );
}
