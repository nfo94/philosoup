import styled from "styled-components";

export const HeaderStyle = styled.header`
  padding: 0.7rem;
  background-color: #fff;
  top: 0;
  position: sticky;
  display: flex;
  justify-content: space-around;

  div a {
    color: #27ae60;
    font-size: 25px;
  }

  div a:hover {
    font-weight: bold;
  }

  button {
    padding: 0.4rem;
    font-size: 15px;
    color: #9b59b6;
    background: #fff;
    text-transform: uppercase;
  }

  button + button {
    margin-left: 0.1rem;
  }

  button:hover {
    font-weight: bold;
  }
`;
