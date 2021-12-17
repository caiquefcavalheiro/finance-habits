import styled from "styled-components";
import { AiOutlinePlus } from "react-icons/ai";

export const HeaderBox = styled.div`
  position: relative;
  min-height: 48px;
  //height: 53px;
  width: 100%;
  background-color: #00b4d8;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: var(--radius);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  padding: 5px;

  > input {
    border: none;
    border-radius: var(--radius);
    padding: 3px 10px;
    height: 25px;

    margin-top: 5px;
  }
`;

export const PlusButton = styled(AiOutlinePlus)`
  color: white;
  margin-right: 0.5rem;
  position: absolute;
  right: 0px;
  height: 20px;
  width: 20px;
  cursor: pointer;
  :hover {
    color: #b2bbbf;
  }
`;

export const HeaderSearch = styled.div`
  position: relative;
  min-height: 48px;
  //height: 53px;
  width: 100%;
  background-color: #00b4d8;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: var(--radius);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  padding: 7px;

  @media (min-width: 600px){
    padding: 25px;
  }

  > input {
    border: none;
    border-radius: var(--radius);
    padding: 10px 10px;
    height: 25px;

    margin-top: 5px;
  }
`
