import React, { useRef, useState } from "react";
import "./box.scss";

function Box() {
  const [number, setNumber] = useState("");
  const [boxes, setBoxes] = useState();
  let timeOut = useRef(null);
  const handleSubmit = (count) => {
    let arrayLength = count ? count : number;
    console.log(number);
    let boxArray = [];
    for (let index = 0; index < arrayLength; index++) {
      boxArray.push(<div className="box"></div>);
    }
    setBoxes(boxArray);
  };

  window.addEventListener("resize", (e) => {
    clearInterval(timeOut.current);
    timeOut.current = setTimeout((arg) => {
      let count = Number(number) + 1;
      setNumber(count);
      handleSubmit(count);
    }, 3000);
  });
  return (
    <>
      <input
        type="number"
        value= {number}
        onChange={(e) => {
          setNumber(e.target.value);
        }}
      ></input>
      <button
        type="submit"
        onClick={() => {
          handleSubmit();
        }}
      >
        Submit
      </button>
      <div className="container">{boxes}</div>
    </>
  );
}

export default Box;
