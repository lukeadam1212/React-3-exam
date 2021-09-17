import React, { useRef } from "react";
import OptionInput from "../../atoms/Inputs/OptionInput";

const SelectInputs = ({ data, type }) => {
  const selectOption = useRef();
  const handleSelect = () => {
    dispatchEvent({ type: type, payload: +selectOption.current.value });
  };

  return (
    <select onChange={handleSelect} ref={selectOption}>
      {data.map((item) => (
        <OptionInput
          value={item.value}
          text={item.text}
          stateName={item.stateName}
          key={item.name + 1}
        />
      ))}
    </select>
  );
};

export default SelectInputs;
