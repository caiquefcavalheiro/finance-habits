import styled from "styled-components";
import { Card } from "../Habit/style";
import {CgClose} from "react-icons/cg"

export const Close = styled(CgClose)`
  color: var(--color-dark-blue);
  margin: auto 95%;
  cursor: pointer;
`

export const CardsBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  .desktop{
      display: none;
  }

  @media screen and (min-width: 600px){
      width: 100%;
      justify-content: space-around;

      .mobile{
          display: none;
      }

      .desktop{
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
  }
`;

export const CardInfo = styled(Card)`
  color: var(--color-primary-blue);
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  
  

  .title{
      display: none;
  }

  @media screen and (min-width: 600px){
      margin: 10px;
      font-size: 20px;
      color: var(--color-grey-text);
      font-family: "Halter";
      
      .title{
          display: initial;
          width: 285px;
      }
  }
`
export const EditIcon = styled.div`
    height: 40px;
    text-align: center;

    svg{
        font-size: 30px;
    }

    @media screen and (min-width: 600px){
        width: 40px;
        position: absolute;
        right: 10px
    }
`
export const Description = styled.p`
    @media screen and (min-width: 600px){
        font-size: 18px;
        margin-left: 10px;
    }
`

export const CardExtra = styled(Card)`
  min-width: 238px;
  margin-bottom: 20px;
  @media screen and (min-width: 600px) {
    margin: 10px;
  }
`;

export const SupportHeader = styled.div`
  height: 25px;
  margin: 0 10px;
  padding: 0 10px;
  background-color: var(--color-primary-blue);
  font-size: 20px;
  display: flex;
  align-items: center;
  color: var(--color-white);
  position: relative;
`;

export const Icon = styled.div`
  position: absolute;
  right: 10px;
`;

export const ScrollBox = styled.div`
  .Collapsible{
    width: 230px;
    margin: 10px auto;
    padding: 0 10px;
    height: auto;
    border-radius: var(--radius);
    background-color: var(--color-card-blue);
    font-size: 16px;
    display: flex;
    flex-direction: column;
    justify-content: center;
      

    .is-closed{
        color: var(--color-grey-text);
    }

    .is-open{
        color: var(--color-dark-blue);
    }

    .Collapsible__contentInner{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
      
    p{
        width: 210px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        padding: 10px 0;
    }

    @media screen and (min-width: 600px){
        background-color: var(--color-light-blue);
        margin: 10px 0;
    }
  }
  
  @media screen and (min-width: 600px){
      margin: 10px;
      width: 250px;
      height: 210px;
      overflow: auto;
  }
`

export const MiniCard = styled.div`
  position: relative;
  width: 230px;
  margin: 10px auto;
  padding: 0 10px;
  height: 60px;
  border-radius: var(--radius);
  background-color: var(--color-card-blue);
  color: var(--color-grey-text);
  font-size: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  > i {
    margin-left: 95%;
  }

  p {
    width: 205px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  @media screen and (min-width: 600px) {
    background-color: var(--color-light-blue);
    margin: 10px 0;
  }
`;

export const ContainerButtonsActivities = styled.div`
  position: absolute;
  right: 5px;
  top: 5px;
  cursor: pointer;

  svg {
    margin: 0 2px;
  }
`;
