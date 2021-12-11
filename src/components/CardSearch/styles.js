import styled from "styled-components";
import { Popover } from "@mui/material";
import { Box } from "@mui/system";

export const BoxMobile = styled.div`
  @media screen and (min-width: 600px) {
    display: none;
  }
`;

export const PopBox = styled(Box)`
  background-color: #0090ad;
  color: #ffffff;
`;

export const BoxDesktop = styled.div`
  display: none;
  width: 331.8px;
  height: 226px;
  background-color: #e2f2f9;
  border: solid 1px #0090ad;
  border-radius: 8px;
  padding: 8px;
  color: #6c6c6c;
  font-family: 'Halter';
  text-transform: uppercase;

  @media screen and (min-width: 600px) {
    display: block;
  }
`;

export const PopOVER = styled(Popover)`
  @media screen and (min-width: 600px) {
    display: none;
  }
`;

export const CardH = styled.div`
  width: 231px;
  height: 48px;
  left: 70px;
  top: 210px;
  background-color: #e2f2f9;
  border-radius: 8px;
  color: #6c6c6c;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  box-shadow: 4px 4px #dcdcdc;
  border: solid 1px #0090ad;
  div {
    font-family: "Roboto", sans-serif;
    font-size: 20px;
  }
`;

export const ButtonPop = styled.button`
  width: 101px;
  height: 21px;
  border: solid 1px #ffffff;
  border-radius: 8px;
  color: #ffffff;
  background-color: #0090ad;
  font-size: 10px;
`;

export const TittlePop = styled.div`
  text-align: center;
`;

export const DescPop = styled.div`
  text-align: inherit;
  margin-bottom: 10px;
  font-family: "Roboto", sans-serif;
  font-size: 20px;
`;

export const BoxButton = styled.div`
  display: flex;
  justify-content: end;
  align-items: end;
`;

export const Image = styled.img`
  width: 54.2px;
  height: 60px;
`;

export const BoxImage = styled.div`
  width: 81.08px;
  height: 65px;
  border:solid 2px #0090AD;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BoxName = styled.div`
  display: flex;
  flex-direction: row;
  align-items: end;
  justify-content: space-between;
`;

export const ButtonDesc = styled.button`
  width: 101px;
  height: 21px;
  border: solid 1px #0090ad;
  border-radius: 8px;
  color: #0090ad;
  background-color: #e2f2f9;
  font-size: 10px;
`;

export const DivCattegory = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
  div{font-size:15px;}
`;

export const Description = styled.div`
     font-size: 10px;
    margin-bottom: 12px;
    width: 313px;
    height: 70px;
`;

export const Name = styled.div`
  font-size:15px;
`