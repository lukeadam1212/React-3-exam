import React from "react";
import styled from "styled-components";

// custom style
const StyledButton = styled.button`
  width: 15rem;
  height: 2rem;
  border-radius: 0.5rem;
  background-color: rgba(2, 47, 65, 0.87);
  color: white;
`;

const Button = ({ buttonType, buttonText, action }) => {
  return (
    <StyledButton onClick={action} type={buttonType}>
      {buttonText}
    </StyledButton>
  );
};

export default Button;
