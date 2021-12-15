import styled from "styled-components";
import ReactModal from "react-modal";

export const HabitModal = styled(ReactModal)`
  position: fixed;
  bottom: 0px;
  height: 800px;
  width: 100%;
  height: 80%;
  margin: 0 auto;
  background: var(--color-light-blue);
  border-radius: 50px 50px 0px 0px;
  padding: 20px;
  transform: translate(-50, -50%);

  label[data-shrink=false]+.MuiInputBase-formControl .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input {
    background-color: white;
  }
  .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input:focus {
    background-color: white;
  }

  @media (min-width: 500px) {
    position: absolute;
    width: 530px;
    min-height: 420px;
    margin-left: -257.5px;
    margin-top: -160px;
    border-radius: 8px;
    left: 50%;
    top: 35%;
  }
  
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  Button {
    background: var(--color-dark-blue);
    height: 2.5rem;
    color: #ffffff;
    width: 190px;
    left: 91px;
    top: 576px;
    border-radius: 8px;
    margin: 1rem auto;
  }
`;

export const Content = styled.div`
  display: flex;
  text-align: center;
  margin: 0.5rem auto;
  color: white;
`;
