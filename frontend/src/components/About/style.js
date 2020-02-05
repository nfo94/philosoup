import styled from "styled-components";

export const AboutStyle = styled.section`
  h1 + div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  }

  div > div {
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
    justify-content: space-between;
    max-width: 500px;
  }

  h1 {
    margin-bottom: 1.5rem;
    text-align: center;
  }

  p {
    padding: 1rem 2rem;
    text-align: center;
  }

  img {
    max-width: 200px;
    border-radius: 20%;
  }
`;
