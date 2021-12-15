import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: black;
  color: white;
  height: 10%;

  @media screen and (max-width: 800px) {
    height: 33%;
    flex-direction: column;
    align-content: center;
    align-items: flex-start;
    flex-wrap: wrap;
  }

  a {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    color: white;
  }

  img {
    margin-right: 15px;
    width: 40px;
    border-radius: 50%;
  }
`;
