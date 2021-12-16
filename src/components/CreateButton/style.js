import { styled } from "@mui/system";
import { AiOutlinePlus } from "react-icons/ai";

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
