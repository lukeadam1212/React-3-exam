import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

// custom style
const StyledUserCard = styled.div`
  height: 23rem;
  width: 18rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  border: 1px solid white;
  margin: 1rem;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 1rem;
  img {
    height: 7rem;
    width: 7rem;
    object-fit: cover;
    border-radius: 1rem;
  }
  button {
    width: 15rem;
    height: 2rem;
    border-radius: 0.5rem;
    background-color: rgba(2, 47, 65, 0.87);
    color: white;
  }
  input {
    width: 15rem;
    height: 2rem;
    border-radius: 0.5rem;
  }
`;
const UserCard = () => {
  // Hooks
  const ref = useRef();
  const refSelect = useRef();
  const [userProfile, setUserProfile] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/users")
      .then((res) => setUserProfile([...res.data]));
  });
  const deleteUser = (id) => {
    axios.delete(`http://localhost:5000/api/users/${id}`);
    console.log("User deleted");
    setMessage("User deleted");
  };

  return (
    <>
      {userProfile.map((item) => (
        <StyledUserCard key={item._id}>
          <p>
            <span>NAME: </span>
            {item.name}
          </p>
          <p>
            <span>EMAIL:</span> {item.email}
          </p>
          <p>
            <span>AGE:</span> {item.age}
          </p>
          <p>
            <span>PASSWORD:</span> {item.password}
          </p>
          <h4>Choose field to update</h4>
          <select ref={refSelect}>
            <option value="name">{item.name}</option>
            <option value="email">{item.email}</option>
            <option value="age">{item.age}</option>
            <option value="password">{item.password}</option>
          </select>

          <input type="text" ref={ref} />
          <button
            onClick={() => {
              const data =
                refSelect.current.value === "name"
                  ? {
                      name: ref.current.value,
                    }
                  : refSelect.current.value === "email"
                  ? {
                      email: ref.current.value,
                    }
                  : refSelect.current.value === "age"
                  ? {
                      age: ref.current.value,
                    }
                  : refSelect.current.value === "password"
                  ? {
                      password: ref.current.value,
                    }
                  : {};
              axios.put(`http://localhost:5000/api/users/${item._id}`, data);
            }}
          >
            Update
          </button>
          <button
            onClick={() => {
              deleteUser(item._id);
            }}
          >
            Delete user
          </button>
        </StyledUserCard>
      ))}
      {message && <h6>{message}</h6>}
    </>
  );
};

export default UserCard;
