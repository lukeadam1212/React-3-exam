import React from "react";

const TextInput = ({ label, id, type }) => {
  return label ? (
    <>
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} />
    </>
  ) : (
    <input type={type} />
  );
};

export default TextInput;
