import styled from "styled-components";
import { AiOutlinePlus } from "react-icons/ai";

export const Container = styled.div`
  background: #d2d2d233;
  height: 445px;
  width: 270px;
  left: 50px;
  top: 168px;
  border-radius: 8px;
  margin: 2rem auto;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 0px 2px 2px #00000040;

  @media (min-width: 600px) {
    width: 784.2622680664062px;
    height: auto;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: flex-start;
  }
`;
export const Header = styled.div`
  background: var(--color-primary-blue);
  height: 53px;
  width: 211px;
  margin: 1rem;
  text-align: center;
  padding-top: 1rem;
  color: white;

  @media (min-width: 600px) {
    width: 90vw;
  }
`;
export const PlusButton = styled(AiOutlinePlus)`
  color: white;
  float: right;
  margin-right: 0.5rem;
`;
