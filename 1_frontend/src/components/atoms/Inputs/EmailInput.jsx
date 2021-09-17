import React from "react";

const EmailInput = ({ label, id }) => {
  return label ? (
    <>
      <label htmlFor={id}>{label}</label>
      <input type="email" id={id} />
    </>
  ) : (
    <input type="email" />
  );
};

export default EmailInput;
