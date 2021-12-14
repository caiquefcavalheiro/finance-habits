import styled from "styled-components";
import { AiOutlinePlus } from "react-icons/ai";

export const DashboardBox = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 auto;
`;

export const Container = styled.div`
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 1170px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;

export const ContainerColumn = styled.div`
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
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
  //margin-top: 20px;

  /* @media (min-width: 600px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 20px;
  } */

  @media (min-width: 800px) {
    flex-direction: row;
  }
`;
