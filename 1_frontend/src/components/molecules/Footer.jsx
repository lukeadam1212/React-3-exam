import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  height: 5vh;
  background-color: rgba(255, 255, 255, 0.2);
  max-width: 80rem;
  margin: 0 auto;
  padding: 0 1rem 0 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 1rem 1rem 0 0;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <p> &copy; {new Date().getFullYear()} All rights reserved</p>
    </StyledFooter>
  );
};

export default Footer;
