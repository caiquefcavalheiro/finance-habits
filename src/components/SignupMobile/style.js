import styled from "styled-components";

export const Container = styled.div`
  background-color: #80c9d8;
  color: white;
  width: 500px;
  margin: 20px 20px;
  padding: 20px;
  border-radius: var(--radius);
  display: flex;
  text-align: center;

  .MuiFormControl-root {
    width: 80%;
    background-color: white;
    border-radius: var(--radius);

    label {
      color: var(--color-dark-blue);
    }
  }

  h2 {
    font-family: "Roboto", sans-serif;
    font-size: 36px;
    margin-bottom: 40px;
    margin-top: 20px;

    @media screen and (max-width: 800px) {
      margin: 0;
    }
  }

  p {
    color: black;
  }

  button {
    width: 80%;
    border: none;
    margin: 20px 0;
  }

  @media screen and (min-width: 800px) {
    width: 450px;
  }

  @media screen and (max-width: 800px) {
    width: 450px;
  }
`;
