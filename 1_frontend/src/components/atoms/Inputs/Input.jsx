import React from "react";

const Input = ({ inputType, text, required }) => {
  return (
    <>
      <label>{text}</label>
      <input type={inputType} required={required} />
    </>
  );
};

export default Input;
