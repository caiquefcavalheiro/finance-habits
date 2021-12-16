import styled from "styled-components";

export const Main = styled.main`
  width: 100%;
  height: 367px;
  overflow-y: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 10px;

  @media screen and (min-width: 600px) {
    height: auto;
  }

  @media screen and (min-width: 800px) {
    display: grid;
    grid: auto-flow / 1fr 1fr;
  }

  @media screen and (min-width: 1200px) {
    grid: auto-flow / 1fr 1fr 1fr;
  }
`;
