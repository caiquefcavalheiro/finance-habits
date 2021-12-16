import styled from "styled-components";
import { Card } from "../Habit/style";

export const CardsBox = styled.div`
    display: flex;
    flex-wrap: wrap;
    .desktop{
        display: none;
    }

    @media screen and (min-width: 600px){
        width: 100%;
        justify-content: space-around;

        .desktop{
            display: flex;
            justify-content: center;
            align-items: center;
            position: absolute;
            bottom: 15px;
            right: 15px;
        }
    }
`

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
        }
    }
`

export const CardExtra = styled(Card)`
    min-width: 238px;
    margin-bottom: 20px;
    @media screen and (min-width: 600px){
        margin: 10px;
    }
`

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
`

export const Icon = styled.div`
    position: absolute;
    right: 10px;
`

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

    p{
        width: 210px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }

    @media screen and (min-width: 600px){
        background-color: var(--color-light-blue);
        margin: 10px 0;
    }
`

