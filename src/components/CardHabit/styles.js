import styled from "styled-components"
import { FiCheck} from "react-icons/fi";
export const FrequencyAndDifficult = styled.div`
    text-align: left;
    p {
        margin: 0.5rem;
        font-size: 0.8rem;
    }
`
export const Check = styled(FiCheck)`
  width: 26px;
  height: 26px;
  cursor: pointer;
  margin-left: 15px;
  color: var(--color-dark-blue);
  :hover {
    color: #b2bbbf;
  }
`;