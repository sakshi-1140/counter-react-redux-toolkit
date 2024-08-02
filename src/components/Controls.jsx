import React, { useRef } from "react";
import { useDispatch } from "react-redux";

function Controls() {
  const inputElement = useRef("");
  const dispatch = useDispatch();

  const handleIncrement = () => {
  //  console.log("+1 clicked");
    dispatch({ type: "INCREMENT" });
  };
  const handleDecrement = () => {
   // console.log("-1 clicked");
    dispatch({ type: "DECREMENT" });
  };
  const handleToggle=()=>{
   // console.log("Toggle clicked")
    dispatch({type:"PRIVACY_TOGGLE"})
  }
  const handleAddition = () => {
 //   console.log("Add clicked");
 //   console.log(inputElement.current.value);
    dispatch({
      type: "ADDITION",
      payload: { num: inputElement.current.value },
    });
    inputElement.current.value = "";
  };
  const handleSubtract = () => {
 //   console.log("SUBTRACT clicked");
 //   console.log(inputElement.current.value);
    dispatch({
      type: "SUBTRACT",
      payload: { num: inputElement.current.value },
    });
    inputElement.current.value = "";
  };
  return (
    <>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button
          onClick={handleIncrement}
          type="button"
          className="btn btn-primary"
        >
          +1
        </button>
        <button
          onClick={handleDecrement}
          type="button"
          className="btn btn-success"
        >
          -1
        </button>
        <button
          onClick={handleToggle}
          type="button"
          className="btn btn-warning"
        >
          Privacy Toggle
        </button>
      </div>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center control-row">
        <input
          type="text"
          className="number-input"
          placeholder="Enter number"
          ref={inputElement}
        />

        <button onClick={handleAddition} type="button" className="btn btn-info">
          Add
        </button>
        <button
          onClick={handleSubtract}
          type="button"
          className="btn btn-danger"
        >
          Subtract
        </button>
      </div>
    </>
  );
}

export default Controls;
