import React, { useEffect } from "react";
import styled from "styled-components";

// components
import RegistrationForm from "../components/organisms/Forms/RegistrationForm";
import UserCard from "../components/organisms/Forms/UserCard";

// custom styles
const StyledDivAdmin = styled.div`
  height: 90vh;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 1rem;
`;

const StyledUsers = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin: 2rem;
`;

const AdminScreen = () => {
  useEffect(() => {
    // page title
    document.title = "Admin page";
  });

  return (
    <StyledDivAdmin>
      <h2>Register new users</h2>
      <RegistrationForm />
      <h2>All registered users</h2>
      <StyledUsers>
        <UserCard />
      </StyledUsers>
    </StyledDivAdmin>
  );
};

export default AdminScreen;
