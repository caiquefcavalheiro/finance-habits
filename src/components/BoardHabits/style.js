import styled from "styled-components";
import { AiOutlinePlus } from "react-icons/ai";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-botton @media (min-width: 600px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
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

export const BoxDashboard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (min-width: 600px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    margin-top: 20px;
  }
`;
