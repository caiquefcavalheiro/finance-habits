import styled from "styled-components";
import { Card } from "../Habit/style";


export const CardInfo = styled(Card)`
    color: var(--color-primary-blue);
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0 10px;
    
    p{
        margin-bottom: 10px;
    }

    @media screen and (min-width: 600px){
        margin: 10px;
        font-size: 20px;
        color: var(--color-grey-text);
    }
`