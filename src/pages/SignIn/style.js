import styled from "styled-components";

export const MainContainer = styled.div`
  width: 100vw;
  height: 100vh;

  .header {
    display: none;
    background: var(--color-gradient-blue);
    padding-top: 20px;
    font-family: "Gugi", cursive;
    color: var(--color-white);
    text-align: center;
  }

  .ComponentHeader {
    height: 10%;

    div {
      height: 100%;
    }
  }

  @media screen and (max-width: 800px) {
    .header {
      display: block;
    }

    .ComponentHeader {
      display: none;
    }
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
  background: var(--color-gradient-blue);
  height: 80%;

  .MuiFormControl-root {
    width: 80%;
    background-color: white;
    border-radius: var(--radius);

    label {
      color: var(--color-dark-blue);
    }
  }

  button {
    border: none;
    width: 80%;
    margin: 20px 0;
  }

  .group1 {
    width: 40%;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #80c9d8;
    border-radius: var(--radius);
  }

  .group2 {
    margin: 0;
    padding-left: 20px;
    width: 40%;
    animation: 3s movement;
  }

  @keyframes movement {
    to {
      opacity: 100%;
    }
    from {
      opacity: 0;
    }
  }

  img {
    width: 100%;
    max-width: 430px;
  }

  @media screen and (max-width: 1000px) {
    justify-content: center;
    height: 80%;

    .group2 {
      display: none;
    }
  }

  @media screen and (max-width: 1200px) {
    div h1 {
      font-size: 50px;
    }
  }

  @media screen and (min-width: 800px) {
    .group1 {
      width: 450px;
    }
  }

  @media screen and (max-width: 800px) {
    height: 60%;

    .group1 {
      width: 350px;
    }
  }

  @media screen and (max-width: 600px) {
    .group1 {
      width: 300px;
    }
  }
`;

export const Form = styled.form`
  width: 370px;
  height: 420px;
  background-color: #80c9d8;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 30px 20px;
  border-radius: 8px;

  h2 {
    color: #fff;
    font-size: 32px;
  }

  p {
    color: #000;

    a {
      color: var(--color-dark-blue);
    }
  }

  @media screen and (max-width: 800px) {
    height: 360px;
  }
`;
