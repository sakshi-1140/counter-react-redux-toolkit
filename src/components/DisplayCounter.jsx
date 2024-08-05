import React from "react";
import { useSelector } from "react-redux";

function DisplayCounter() {
   const {counterVal}= useSelector((state)=>state.counter);
  return (
    <p className="lead mb-4">
      Counter Current Value : {counterVal}
    </p>
  );
}

export default DisplayCounter;
