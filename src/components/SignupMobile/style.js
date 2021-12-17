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

  .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input{
    height: 15px;
  }

  .MuiFormControl-root {
    width: 80%;
    margin: 0.3rem auto;
    background-color: white;
    border-radius: var(--radius);

    label {
      color: var(--color-dark-blue);
    }
  }

  h2 {
    font-family: "Roboto", sans-serif;
    font-size: 36px;
    margin: 0.2rem auto 0.5rem auto;
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
    margin: 0.7rem;
  }

  @media screen and (min-width: 800px) {
    width: 450px;
  }

  @media screen and (max-width: 800px) {
    width: 450px;
  }
`
