import React from "react";
import NumberInput from "../../atoms/Inputs/NumberInput";

const NumberInputs = ({ data }) => {
  return data.map((item) => (
    <NumberInput label={item.label} id={item.id} key={item.id} />
  ));
};

export default NumberInputs;
