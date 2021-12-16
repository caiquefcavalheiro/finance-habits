import styled from "styled-components";
import { BsTriangleFill } from "react-icons/bs";

export const Container = styled.div`
  button {
    display: none;
  }

  @media screen and (min-width: 600px) {
    width: 180px;
    height: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;

    button {
      display: initial;
      margin-bottom: 35px;
    }
  }
`;

export const PreviousArrowButton = styled(BsTriangleFill)`
  color: ${(props) =>
    props.disabled ? "var(--color-light-blue)" : "var(--color-dark-blue)"};
  transform: rotate(-90deg);
  font-size: 25px;
  position: fixed;
  top: ${(props) => `${props.position.height / 2}px`};
  left: ${(props) => `${props.position.width / 2 - 140}px`};

  @media screen and (min-width: 600px) {
    display: none;
  }
`;

export const NextArrowButton = styled(PreviousArrowButton)`
  transform: rotate(90deg);
  left: ${(props) => `${props.position.width / 2 + 115}px`};
`;
