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
    cursor: pointer;

    :hover {
      text-shadow: 1px 1px 3px white;
    }
  }

  img {
    margin-right: 15px;
    border-radius: 50%;
    transform-style: preserve-3d;
    transition: all 0.75s ease;
  }
`;

export const TagP = styled.p`
  display: none;
  @media screen and (max-width: 800px) {
    display: block;
  }
`;

export const SpecialImg = styled.img`
  width: 40px;
  height: 40px;

  :hover {
    transform: rotateY(360deg);
    content: url(https://static1.purebreak.com.br/articles/9/20/76/9/@/104805-liam-payne-do-one-direction-revela-em-diapo-2.jpg);
  }
`;

export const CommonImg = styled.img`
  width: 40px;

  :hover {
    transform: rotateY(360deg);
  }
`;
