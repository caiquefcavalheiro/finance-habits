import styled from "styled-components";
import ReactModal from "react-modal";
import { FiX } from "react-icons/fi";

export const IconX = styled(FiX)`
  position: absolute;
  right: 15px;
  top: 20px;
  width: 30px;
  height: 20px;
  cursor: pointer;
`;

export const FormHabit = styled.form`
  display: ${(props) => (props.type === "habit" ? "flex" : "none")};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 0 20px 0;
  width: 300px;

  .MuiInputLabel-root {
    color: var(--color-dark-blue);
  }

  .MuiOutlinedInput-root {
    background-color: white;
  }

  h3 {
    width: 100%;
    text-align: left;
    margin: 15px 0;
  }
  button {
    margin: 15px 0;
  }

  div {
    width: 100%;
    display: flex;
    justify-content: space-evenly;

    label {
      text-align: center;
    }
  }
`;

export const FormGroup = styled.form`
  display: ${(props) => (props.type === "groups" ? "flex" : "none")};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 0 20px 0;
  width: 300px;

  .MuiInputLabel-root {
    color: var(--color-dark-blue);
  }

  .MuiOutlinedInput-root {
    background-color: white;
  }

  h3 {
    width: 100%;
    text-align: left;
    margin: 15px 0;
  }
  button {
    margin: 15px 0;
  }

  div {
    width: 100%;
    display: flex;
    justify-content: space-evenly;

    label {
      text-align: center;
    }
  }
`;

export const FormActivities = styled.form`
  display: ${(props) => (props.type === "activities" ? "flex" : "none")};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 0 20px 0;
  width: 300px;

  .MuiInputLabel-root {
    color: var(--color-dark-blue);
  }

  .MuiOutlinedInput-root {
    background-color: white;
  }

  h3 {
    width: 100%;
    text-align: left;
    margin: 15px 0;
  }
  button {
    margin: 15px 0;
  }

  div {
    width: 100%;
    display: flex;
    justify-content: space-evenly;

    label {
      text-align: center;
    }
  }
`;

export const FormGoals = styled.form`
  display: ${(props) => (props.type === "goals" ? "flex" : "none")};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 0 20px 0;
  width: 300px;

  .MuiInputLabel-root {
    color: var(--color-dark-blue);
  }

  .MuiOutlinedInput-root {
    background-color: white;
  }

  h3 {
    width: 100%;
    text-align: left;
    margin: 15px 0;
  }
  button {
    margin: 15px 0;
  }

  div {
    width: 100%;
    display: flex;
    justify-content: space-evenly;

    label {
      text-align: center;
    }
  }
`;

export const ReactModalStyled = styled(ReactModal)`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 0px;
  height: 450px;
  margin: 0;
  background: var(--color-light-blue);
  border-radius: 50px 50px 0px 0px;
  padding: 20px;
  top: 75%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media (min-width: 500px) {
    position: absolute;
    width: 330px;
    height: 450px;
    border-radius: 8px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;