import styled from "styled-components";
import { AiOutlinePlus } from "react-icons/ai";

export const HeaderBox = styled.div`
  position: relative;
  min-height: 53px;
  height: 53px;
  width: 100%;
  background-color: #00b4d8;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
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
