import styled from "styled-components";

export const SecondaryContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media screen and (min-width: 600px) {
    flex-direction: row;
  }
`;

export const CardsConatiner = styled.div`
  @media screen and (min-width: 600px) {
    width: 100%;
  }
`;

export const CardsBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  .desktop {
    display: none;
  }

  @media screen and (min-width: 600px) {
    width: 100%;
    justify-content: space-around;
    flex-direction: row-reverse;

    .mobile{
      display: none;
    }

    .desktop {
      display: initial;
    }

    .image{
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      bottom: 15px;
      right: 15px;
    }
  }
`;

export const Card = styled.div`
  @media screen and (min-width: 600px) {
    width: 395px;
    height: 270px;
    border: 1px solid var(--color-dark-blue);
    background-color: var(--color-card-blue);
    padding: 15px;
    position: relative;
    border-radius: var(--radius);
  }
`;

export const CardAchieved = styled(Card)`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 600px) {
    align-items: flex-end;
    margin: 10px;
  }
`;

export const IconsBox = styled.div`
  padding-top: 10px;
  height: 80px;
  width: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  svg{
    font-size: 30px
  }

  @media screen and (min-width: 600px) {
    height: 40px;
    padding-top: 0;
  }
`

export const CardInfo = styled(Card)`
  color: var(--color-primary-blue);
  margin-top: 20px;
  min-height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .title{
    display: none;
  }

  @media screen and (min-width: 600px) {
    margin: 10px;
    font-size: 20px;
    color: var(--color-grey-text);
    font-family: "Halter";


    .title{
      display: initial;
      width: 275px;
    }
  }
`;

export const CenterBox = styled.div`
  @media screen and (min-width: 600px) {
    margin-left: 10px;

    p{
      font-size: 18px
    }
  }
`
