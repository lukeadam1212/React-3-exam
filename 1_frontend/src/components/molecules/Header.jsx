import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../../assets/images/logo1.png";

// custom style
const StyledHeader = styled.header`
  height: 5vh;
  display: flex;
  max-width: 80rem;
  align-items: center;
  justify-content: space-between;
  background-color: rgba(255, 255, 255, 0.2);
  margin: 0 auto;
  padding: 0 1rem 0 1rem;
  border-radius: 0 0 1rem 1rem;
  img {
    height: 3rem;
  }
`;

const StyledUl = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 20rem;
  list-style: none;
  a {
    text-decoration: none;
    color: black;
    color: white;
  }
  a:hover {
    color: rgb(2, 47, 65);
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <div>
        <img src={logo} alt="" />
      </div>
      <nav>
        <StyledUl>
          <li>
            <Link to="/">Admin page</Link>
          </li>
        </StyledUl>
      </nav>
    </StyledHeader>
  );
};

export default Header;
