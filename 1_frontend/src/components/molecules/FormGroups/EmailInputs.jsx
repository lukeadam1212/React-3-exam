import React from "react";
import EmailInput from "../../atoms/Inputs/EmailInput";

const EmailInputs = ({ data }) => {
  return data.map((item) => (
    <EmailInput label={item.label} id={item.id} key={item.id} />
  ));
};

export default EmailInputs;
