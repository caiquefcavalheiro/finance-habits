import styled from "styled-components";
import { Menu } from "@mui/material";

export const ContainerMenu = styled(Menu)`
  .MuiMenuItem-root {
    justify-content: center;
  }
  .MuiPaper-root {
    background-color: #0090ad;
  }

  hr {
    margin: 0 10px;
  }

  @media screen and (min-width: 1000px) {
    display: none;
  }
`;

export const Container = styled.div`
  height: 10%;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #0090ad;
  padding: 10px 0;

  h1 {
    font-family: "Gugi", cursive;
    font-size: 35px;
    font-weight: normal;
    color: var(--color-font);
    margin: 0 40px;
  }
`;

export const Icon = styled.button`
  color: #ffffff;
  padding: 5px;
  background-color: #0090ad;
  margin: 0 20px;

  svg {
    font-size: 25px;
  }
`;
export const ContainerButtons = styled.div`
  display: none;
  @media screen and (min-width: 1000px) {
    display: flex;
    align-items: center;
  }

  button {
    margin-left: 15px;
    margin-right: 20px;
  }
`;
export const ContainerIcon = styled.div`
  display: none;

  @media screen and (max-width: 1000px) {
    display: block;
  }
`;
