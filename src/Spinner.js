import React from "react";
import spinnerImg from './spinner.gif'
const Spinner = () => {
  return (
    <div className="d-flex justify-content-center
    ">
        <img src={spinnerImg} alt="" />
    </div>
  );
};

export default Spinner;
