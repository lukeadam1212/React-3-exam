import React, { useState, useRef } from "react";
import styled from "styled-components";
import axios from "axios";

// components
import TextInputs from "../../molecules/FormGroups/TextInputs";
import NumberInputs from "../../molecules/FormGroups/NumberInputs";
import EmailInputs from "../../molecules/FormGroups/EmailInputs";

import Button from "../../atoms/Buttons/Button";

// custom styles
const StyledForm = styled.form`
  width: 25rem;
  height: 25rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: rgba(255, 255, 255, 0.2);
  align-items: center;
  margin: 0 auto;
  padding: 1rem;
  border-radius: 1rem;
  margin: 1rem;
`;

const Form = () => {
  const formRef = useRef;

  const [message, setMessage] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    if (
      !e.target.name.value ||
      !e.target.email.value ||
      !e.target.age.value ||
      !e.target.password.value
    ) {
      setMessage("Please fill in all fields");
      formRef.current.reset();
      return;
    }

    const name = e.target[0].value;
    const email = e.target[1].value;
    const age = e.target[2].value;
    const password = e.target[3].value;

    // creating new user object
    const userData = {
      name: name,
      email: email,
      age: age,
      password: password,
    };

    axios
      .post("http://localhost:5000/api/users", userData)
      .then((res) => console.log(res));
    setMessage("New user created");
    e.target.reset();
  };
  return (
    <>
      <StyledForm onSubmit={submitHandler}>
        <TextInputs
          data={[
            {
              label: "User Name",
              id: "name",
              type: "text",
            },
          ]}
        />
        <EmailInputs
          data={[
            {
              label: "User Email",
              id: "email",
            },
          ]}
        />
        <NumberInputs
          data={[
            {
              label: "User Age",
              id: "age",
            },
          ]}
        />
        <TextInputs
          data={[
            {
              label: "User Password",
              id: "password",
              type: "password",
            },
          ]}
        />
        <Button buttonType="submit" buttonText="Submit" />
      </StyledForm>
      {message && <h3>{message}</h3>}
    </>
  );
};

export default Form;
