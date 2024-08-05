import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { counterActions } from "../store/Counter";
import { privacyActions } from "../store/privacy";

function Controls() {
  const inputElement = useRef("");
  const dispatch = useDispatch();

  const handleIncrement = () => {
   // console.log("+1 clicked",counterActions.increment());
    dispatch(counterActions.increment());
   
  };
  const handleDecrement = () => {
  // console.log("-1 clicked");
   dispatch(counterActions.decrement());
  };
  const handleToggle=()=>{
    //console.log("Toggle clicked")
    dispatch(privacyActions.toggle());
  }
  const handleAddition = () => {
 //   console.log("Add clicked");
 //   console.log(inputElement.current.value);
    dispatch(counterActions.add( inputElement.current.value))
    inputElement.current.value = "";
  };
  const handleSubtract = () => {
 //   console.log("SUBTRACT clicked");
    dispatch(counterActions.subtract( inputElement.current.value))
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
