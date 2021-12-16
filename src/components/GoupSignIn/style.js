import styled from "styled-components";

export const MainContainer = styled.div`
  width: 100%;
  height: 380px;
  position: fixed;
  background: var(--color-light-blue);
  border-radius: 8px;
  padding: 20px;
  display: flex;
  justify-content: center;
  border-radius: 50px 50px 0 0;

  bottom: ${(props) => (props.isOpen ? "0" : "-500px")};
  transition: ${(props) => (props.isOpen ? "1s" : "0")};
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px;

  form {
    display: flex;
    flex-direction: column;

    margin: 2.5rem 0rem;

    .MuiInputLabel-root {
      color: var(--color-dark-blue);
    }

    .MuiOutlinedInput-root {
      background-color: white;
    }

    button {
      margin: 4rem auto;
    }

    @media (max-width: 800px) {
      margin: 0;

      button {
        margin: 1rem auto;
      }
    }
  }
`;

export const Icon = styled.button`
  cursor: pointer;
  background: transparent;

  color: var(--color-font);

  margin-left: 90%;

  svg {
    font-size: 25px;
  }
`;
