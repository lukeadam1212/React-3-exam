import React from "react";

const NumberInput = ({ label, id }) => {
  return label ? (
    <>
      <label htmlFor={id}>{label}</label>
      <input type="number" id={id} />
    </>
  ) : (
    <input type="number" />
  );
};

export default NumberInput;
